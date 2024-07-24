<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';

	import { Toaster } from 'svelte-french-toast';
</script>

<Toaster />
<div class="w-full h-full flex items-center justify-center">
	<slot />
</div>

<style>
	:global(body) {
		background-image: url('/assets/images/topography.svg');
		background-color: #080808;
		background-size: cover;
	}
</style>
