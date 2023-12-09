<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<ul class="posts divide-y divide-current">
  {#each data.posts as post, index}
    <li class="post">
      <h1>
        <a href={`blog/${post.slug}`} class="link-hover">{post.title}</a>
      </h1>
      <p class="date">{formatDate(post.date)}</p>
      <p class="description">{post.description}</p>
    </li>
  {/each}
</ul>

<style>
  h1 {
    @apply text-2xl font-bold font-titi tracking-tight  mb-2;
  }

  .post {
    @apply py-6;
  }
</style>
