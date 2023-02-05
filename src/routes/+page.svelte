<svelte:head>
	<title>ciru</title>
</svelte:head>

<script lang="ts">
	interface Links {
		name: string;
		url?: string;
		class: string;
		tooltip?: string;
		color: string;
	}

	const fa = 'fa-xl';
	const linksClass = 'h-12 w-12 sm:h-12 sm:w-16 tooltip tooltip-bottom p-4 flex items-center justify-center rounded-2xl m-1 shadow-2xl';
	const links: Links[] = [
		{
			name: 'Osu',
			tooltip: 'ciru',
			url: 'https://osu.ppy.sh/users/6114695',
			class: 'fa-solid fa-circle',
      color: '#ff66aa'
		},
		{
			name: 'Discord',
			tooltip: 'ciru#0001',
			class: 'fa-brands fa-discord',
			color: '#7289da'
		},
		{
			name: 'Twitter',
			tooltip: '@ciru_osu',
			url: 'https://twitter.com/ciru_osu',
			class: 'fa-brands fa-twitter',
			color: '#1da1f2'
		},
    {
      name: 'Twitch',
      tooltip: 'ciruos',
      url: 'https://twitch.tv/ciruos',
      class: 'fa-brands fa-twitch',
      color: '#9146ff'
    },
    {
      name: 'Youtube',
      tooltip: '/@ciru.',
      url: 'https://www.youtube.com/@ciru.',
      class: 'fa-brands fa-youtube',
      color: '#ff0000'
    },
    {
      name: 'AniList',
      tooltip: '/ciruu',
      url: 'https://anilist.co/user/ciruu/',
      class: 'fa-brands fa-anilist',
      color: '#0a1625'
    }
	];

	const handleClick = () => {
		const textarea: any = document.createElement('textarea');
		textarea.value = links[1].tooltip;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		textarea.remove();

		const tooltip: any = document.querySelector('#discord');
		tooltip.setAttribute('data-tip', 'Copied to clipboard!');
		setTimeout(() => {
			tooltip.setAttribute('data-tip', links[1].tooltip);
		}, 1000);
	};
</script>

<div class="flex flex-col sm:flex-row justify-center items-center text-white z-0">
  <img src="https://a.ppy.sh/6114695" class="rounded-full w-48 sm:mr-4 shadow-2xl" alt="profile-pic" />
  <span class="flex flex-col w-full">
    <section class="ml-auto mr-auto text-center sm:text-start sm:ml-4 mb-1">
      <h1 class="text-5xl font-bold shadow-text">ciru</h1>
      <h2 class="sm:truncate shadow-text">top 20 osu player.</h2>
    </section>
    <section class="flex justify-center min-w-[300px] w-full max-w-[600px]">
      {#each links as link}
        {#if link.name === 'Discord'}
          <button
            id="discord"
            on:click={handleClick}
            class={linksClass}
            data-tip={link.tooltip}
            style="background-color: {link.color};"
          >
            <i class="{link.class} {fa}" />
          </button>
        {:else if link.name === 'Osu'}
          <a
            href={link.url}
            class='{linksClass}'
            data-tip={link.tooltip}
            style="background-color: {link.color};"
          >
            <img src='/osulogo.png' class="max-w-[32px]" alt="osu-logo">
          </a>
        {:else if link.name === 'AniList'}
          <a
            href={link.url}
            class='{linksClass}'
            data-tip={link.tooltip}
            style="background-color: {link.color};"
          >
            <img src='/anilist.png' class="max-w-[32px]" alt="anilist-logo">
          </a>
        {:else}
          <a
            href={link.url}
            class='{linksClass}'
            data-tip={link.tooltip}
            style="background-color: {link.color};"
          >
            <i class="{link.class} {fa}" />
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
