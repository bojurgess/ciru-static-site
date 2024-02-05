<script lang="ts">
  import { links } from '$lib/links';
	const linksClass =
		'h-12 w-12 sm:h-12 sm:w-16 tooltip tooltip-bottom sm:p-4 flex items-center justify-center rounded-2xl m-1 shadow-2xl';

	const handleClick = () => {
    navigator.clipboard.writeText(links[1].tooltip);

		const tooltip: any = document.querySelector('#discord');
		tooltip.setAttribute('data-tip', 'Copied to clipboard!');
		setTimeout(() => {
			tooltip.setAttribute('data-tip', links[1].tooltip);
		}, 1000);
	};
</script>

<svelte:head>
	<title>ciru</title>
</svelte:head>

<div class="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 items-center text-white z-0">
	<img
		src="https://a.ppy.sh/6114695"
		class="rounded-full w-48 sm:mr-4 shadow-2xl"
		alt="profile-pic"
	/>
	<span class="flex flex-col w-full space-y-2">
		<section class="text-center sm:text-left sm:ml-2">
			<h1 class="text-5xl font-bold shadow-text">ciru</h1>
			<h2 class="sm:truncate shadow-text">top osu player.</h2>
		</section>
		<section class="flex justify-center min-w-[300px] w-full max-w-[600px]">
			{#each links as link}
				{#if link.name === 'Cavoeboy'}
					<a
						href={link.url}
						target="_blank"
						class={linksClass}
						data-tip={link.tooltip}
						style="background-color: {link.color};"
					>
						<img src='/cavoeboy.png' class="max-w-[24px]" alt="{link.name} logo" />
					</a>
				{:else if link.name === 'Discord'}
					<button
						id="discord"
						on:click={handleClick}
						class={linksClass}
						data-tip={link.tooltip}
						style="background-color: {link.color};"
					>
          					<img src='https://cdn.simpleicons.org/{link.name}/fff' class="max-w-[24px]" alt="{link.name} logo" />
					</button>
				{:else}
					<a
						href={link.url}
						target="_blank"
						class={linksClass}
						data-tip={link.tooltip}
						style="background-color: {link.color};"
					>
						<img src='https://cdn.simpleicons.org/{link.name}/fff' class="max-w-[24px]" alt="{link.name} logo" />
					</a>
				{/if}
			{/each}
		</section>
	</span>
</div>

<style>
	.shadow-text {
		text-shadow: 5px 0 10px rgba(0, 0, 0, 0.5);
	}
</style>
