import { browser } from '$app/environment';
import { darkTheme, lightTheme } from '$lib/config/themes';
import { writable } from 'svelte/store';

const initialValue = browser
  ? window.localStorage.theme
    ? window.localStorage.theme
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? darkTheme
      : lightTheme
  : undefined;

export const theme = writable<string>(initialValue);

export const toggleTheme = () => {
  theme.update((value) => (value === lightTheme ? darkTheme : lightTheme));
};
