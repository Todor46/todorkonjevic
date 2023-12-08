<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<ul class="posts">
  {#each data.posts as post}
    <li class="post">
      <h1>
        <a href={`blog/${post.slug}`} class="title">{post.title}</a>
      </h1>
      <p class="date">{formatDate(post.date)}</p>
      <p class="description">{post.description}</p>
    </li>
  {/each}
</ul>

<style>
  h1 {
    @apply text-2xl font-bold font-titi tracking-tight mt-10 mb-2;
  }
</style>
