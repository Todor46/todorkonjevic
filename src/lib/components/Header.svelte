<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/themeStore.ts';
  import { browser } from '$app/environment';
  import { fade } from 'svelte/transition';
  import { ROUTES } from '$lib/config/routes.ts';
  import { darkTheme } from '$lib/config/themes';

  let icon = 'moon';

  theme.subscribe((value) => {
    if (browser) {
      window.localStorage.setItem('theme', value);
      const htmlTag = document.getElementsByTagName('html')[0];
      htmlTag.setAttribute('data-theme', value);
      icon = value === darkTheme ? 'sun' : 'moon';
    }
  });

  let navLinks = [
    {
      label: 'Work',
      path: ROUTES.WORK,
    },
    {
      label: 'Blog',
      path: ROUTES.BLOG,
    },
  ];
</script>

<header class="flex justify-between navbar container max-w-5xl m-auto">
  <a
    href={ROUTES.HOME}
    class="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-caveat tracking-tight font-bold"
    >Todor Konjevic</a>
  <div class="flex gap-6 items-center justify-center">
    <div class="drawer sm:hidden">
      <input id="my-drawer" type="checkbox" class="drawer-toggle burger" />
      <div class="drawer-content">
        <!-- Page content here -->
      </div>
      <div class="drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-3xl">
          <li class="flex-grow bg-transparent"></li>
          <li><a class="link-hover" href={ROUTES.HOME}>Home</a></li>
          {#each navLinks as link}
            <li><a class="link-hover" href={link.path}>{link.label}</a></li>
          {/each}
          <li class="flex-grow bg-transparent"></li>
          <li class="text-sm">Made with SvelteKit and DaisyUI</li>
        </ul>
      </div>
    </div>

    <ul class="hidden sm:flex gap-5 font-medium">
      {#each navLinks as link}
        <li><a class="link-hover" href={link.path}>{link.label}</a></li>
      {/each}
    </ul>
    <button class="hidden sm:flex items-center text-lg w-8" on:click={toggleTheme}>
      {#key icon}
        <iconify-icon in:fade icon={`quill:${icon}`}></iconify-icon>
      {/key}
    </button>
  </div>
</header>

<style>
  .burger {
    @apply flex relative opacity-100 transition-colors;
  }
  .burger::after {
    @apply absolute -top-1.5;
  }
  .burger::before {
    @apply absolute top-1.5;
  }
  .burger,
  .burger::after,
  .burger::before {
    @apply rounded h-0.5 w-5 bg-current content-[''] rotate-0;
  }
  .burger:checked {
    @apply bg-transparent;
  }

  .burger:checked::after {
    @apply rotate-45;
  }
  .burger:checked::before {
    @apply -rotate-45;
  }
  .burger:checked::after,
  .burger:checked::before {
    @apply top-0 delay-75;
  }
  .burger::after,
  .burger::before {
    @apply transition-all transform;
  }
  .burger:checked {
    @apply delay-0;
  }
</style>
