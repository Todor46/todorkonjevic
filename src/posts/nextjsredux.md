---
title: Redux in Next.js with App Router
description: An elegant solution to using Redux in next.js with App Router, by utilizing Higher Order Components.
date: 12-09-2023
categories:
  - Redux
  - Next.js
  - App Router
published: true
---

Recently I started using the new App Router in Next.js which was published with version 13 of Next.js The App Router provides us with some handy new features one of which is Server Components. If you don’t know what Server Components are, in short, it’s a way for Next.js to pre-render the components on the server and serve the HTML to the client. One of the downsides to it is that it takes away the interactions of the components on the client side and we lose the ability to use hooks and other methods that we are so used to. By using the App Router, all components that we create are Server Components by default and if we want to render the component on the client side instead, we need to make it a Client Component by adding “use client” at the beginning of the file like so:

```tsx
'use client';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}
```

By adding the “use client” directive we make the component interactable again. Without the “use client” directive, we would get an error for using a hook inside a component.

There is another caveat with “use client” - by specifying a component as a Client Component, all of the children of that component will be Client Components as well meaning that we should be careful with which components we declare as Client Components to preserve the efficiency of Server Components.

## How to use Redux in App Router?

The first thing that came to my mind was to specify the root Layout component as a Client Component and add our Redux Provider to it, thus every component down the tree will have access to the Redux Provider as well. But by doing this we lose the advantage of Server Components as every component down the tree will be a Client Component as well.
While doing some research to see how others have solved this problem, I stumbled upon this article which provides us with a usable solution.

The solution suggests that we create a Redux Provider component, which is a usual approach, and for each component that we want to use Redux in, create a Wrapper for it in which we will wrap the component with Redux Provider like so:

```tsx
'use client';

import ReduxProvider from '@/app/store/ReduxProvider';
import Counter from './Counter';

export default function CounterWrapper() {
  return (
    <ReduxProvider>
      <Counter />
    </ReduxProvider>
  );
}
```

While this is a viable solution, it creates some extra steps that can clutter our project structure. For each component that uses Redux, we need a wrapper component and while this is not a huge hassle, there is a more elegant solution to the problem.

## HOC to the rescue

A better approach would be to create a HOC and to wrap our exported component with it which will give us access to Redux Provider in the component itself without creating extra wrappers.

To create a HOC that wraps our component with Redux Provider we need to create a function that takes a component as a argument. In our HOC function, we need to create a new component in which we will wrap our argument component with Redux Provider and return the wrapped component.

```tsx
import { Provider } from 'react-redux';
import { store } from './store';

const withRedux = (WrappedComponent: React.ComponentType<any>) => {
  const ComponentWithRedux = (props: any) => {
    return (
      <Provider store={store}>
        <WrappedComponent {...props} />
      </Provider>
    );
  };
  return ComponentWithRedux;
};

export default withRedux;
```

And now we can use our “withRedux” HOC in the components we want to give access to our state:

```tsx
'use client';

import { useAppSelector } from '@/store/store';
import withRedux from '@/store/withRedux';

const Counter = () => {
  const { count } = useAppSelector((state) => state.count);
  return <div>{count}</div>;
};

export default withRedux(Counter);
```

Don’t forget to include “use client” in your wrapped component, hooks and Redux will not be available in Server Components.

## Typesafe Component Props

There might be a scenario where you also need to pass some props to the wrapped component. Using the approach above we don’t get any type safety by default. To do so, we need to add some typescript magic using generics and IntrinsicAttributes type to our HOC:

```tsx
import { Provider } from 'react-redux';
import { store } from './store';

const withRedux = <T,>(WrappedComponent: React.ComponentType<T>) => {
  const ComponentWithRedux = (props: JSX.IntrinsicAttributes & T) => {
    return (
      <Provider store={store}>
        <WrappedComponent {...props} />
      </Provider>
    );
  };
  return ComponentWithRedux;
};

export default withRedux;
```

This is all you have to do. Now if you define some props on your wrapped component, you should get proper intellisense along with type safety when invoking your component.

## Conclusion

We have explored different ways to infuse our applications using App Router with Redux and whether you decide to use more straight-forward wrapper or the elegant HOC solution, the goal remains the same: to empower your components with Redux while embracing the capabilities of Next.js 13. May your components be interactive, your state management robust, and your projects a testament to the synergy of Redux and Server Components. Happy coding!
