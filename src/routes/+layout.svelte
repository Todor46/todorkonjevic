<script>
  import Header from '../lib/components/Header.svelte';
  import 'iconify-icon';
  import '../global.css';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="app bg-gradient-to-bl from-base-100 to-base-300 px-1">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>
