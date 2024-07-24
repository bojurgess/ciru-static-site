<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import type { Link as TLink } from '../types';

	interface Props {
		data: { links: TLink[] };
		form: unknown;
	}

	let { data, form }: Props = $props();
	let { links } = data;
</script>

<main
	class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
>
	<section>
		<img class="rounded-full" src="https://a.ppy.sh/6114695" alt="avatar" />
	</section>
	<section class="space-y-4 text-white">
		<div id="header" class="text-center md:text-start">
			<h1 class="text-7xl">ciru</h1>
			<p class="pl-1">top osu player.</p>
		</div>
		<div class="space-x-1 flex">
			{#each links as l (l.id)}
				<Link link={l} />
			{/each}
		</div>
	</section>
</main>

<style>
	#header {
		line-height: 0.5em;
	}
</style>
