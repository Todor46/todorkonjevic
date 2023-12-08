<script>
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/in/todorkonjevic/',
      icon: 'fa:linkedin',
    },
    {
      url: 'https://github.com/Todor46',
      icon: 'fa:github',
    },
    {
      url: 'https://www.instagram.com/todor_konjevic/',
      icon: 'fa:instagram',
    },
  ];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section
  class="text-center flex-grow text-2xl leading-9 tracking-tight flex justify-center items-center">
  <div class="max-w-[65ch]">
    <p>
      I'm <span
        class="text-bigger text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >Todor Konjevic</span>
      and I'm a
      <span
        class="text-bigger text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
        >frontend developer</span
      >.
    </p>
    <p>I love making stuff, trying new things and writing about it.</p>
    <p>
      I'm just starting a <span
        class="text-accent text-bigger bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary"
        >digital agency</span>
      as well, and I'll try to write about the process as much as I can.
    </p>
    <p class="my-8">You can find me on:</p>
    <div class="flex gap-4 justify-center">
      {#each socialLinks as link}
        <a href={link.url} target="_blank"><iconify-icon icon={link.icon}></iconify-icon></a>
      {/each}
    </div>
  </div>
</section>

<style>
  .text-bigger {
    font-size: 1.15em;
    font-weight: 600;
  }
</style>
