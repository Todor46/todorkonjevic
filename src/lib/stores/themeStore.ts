import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const initialValue = browser
  ? window.localStorage.theme
    ? window.localStorage.theme
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dim'
      : 'fantasy'
  : undefined;

export const theme = writable<string>(initialValue);
