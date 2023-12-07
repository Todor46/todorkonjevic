<script>
	import Header from './Header.svelte';
	import 'iconify-icon';
	import '../global.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>footer</footer>
</div>
