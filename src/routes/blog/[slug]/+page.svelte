<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <div class="mb-5 bg-neutral text-neutral-content py-4 px-4 rounded">
    <!-- Title -->
    <hgroup>
      <h1>{data.meta.title}</h1>
      <p>Published at {formatDate(data.meta.date)}</p>
    </hgroup>

    <!-- Tags -->
    <div class="tags">
      {#each data.meta.categories as category}
        <span class="surface-4">&num;{category}</span>
      {/each}
    </div>
  </div>

  <!-- Post -->
  <div class="prose font-semibold">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  h1 {
    @apply text-2xl font-bold font-titi tracking-tight  mb-2;
  }
</style>
