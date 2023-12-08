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
      label: 'Home',
      path: ROUTES.HOME,
    },
    {
      label: 'About',
      path: ROUTES.ABOUT,
    },
    {
      label: 'Portfolio',
      path: ROUTES.PORTFOLIO,
    },
    {
      label: 'Blog',
      path: ROUTES.BLOG,
    },
    {
      label: 'Contact',
      path: ROUTES.CONTACT,
    },
  ];
</script>

<header class="flex justify-between navbar container max-w-5xl m-auto">
  <div class="text-2xl text-primary font-serif tracking-tight font-bold">Todor Konjevic</div>
  <div class="flex gap-6 items-center justify-center">
    <ul class="flex gap-5 font-medium">
      {#each navLinks as link}
        <li><a class="link-hover" href={link.path}>{link.label}</a></li>
      {/each}
    </ul>
    <button class="flex items-center text-lg w-8" on:click={toggleTheme}>
      {#key icon}
        <iconify-icon in:fade icon={`quill:${icon}`}></iconify-icon>
      {/key}
    </button>
  </div>
</header>
