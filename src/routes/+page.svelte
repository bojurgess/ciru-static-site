<script>
  const links = [
    {
      name: 'Discord',
      url: 'https://discord.com/users/aidan#6543',
      class: 'fa-brands fa-discord fa-xl',
      color: '#7289da',
      tooltip: 'aidan#6543'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ciru_osu',
      class: 'fa-brands fa-twitter fa-xl',
      color: '#1da1f2',
      tooltip: '@ciru_osu'
    },
    {
      name: 'Osu!',
      url: 'https://osu.ppy.sh/users/6114695',
      class: 'w-[24px] m-auto min-w-[24px]',
      color: '#ff69b4',
      tooltip: 'ciru',
      path: '/osulogo.png'
    },
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/ciruos',
      class: 'fa-brands fa-twitch fa-xl',
      color: '#9146ff',
      tooltip: '/ciruos'
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@ciru.',
      class: 'fa-brands fa-youtube fa-xl',
      color: '#ff0000',
      tooltip: '@ciru.'
    }
  ]

  const handleClick = () => {
    const textarea = document.createElement('textarea');
    textarea.value = links[0].tooltip;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    document.querySelector('#discord')?.classList.add('tooltip', 'tooltip-top')
    document.querySelector('#discord')?.setAttribute('data-tip', 'copied to clipboard!')
  }
</script>

<div class="flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-[#111111] text-white">
  <section class="flex flex-col justify-center items-center min-w-full">
    <img src="https://a.ppy.sh/6114695" class="rounded-full w-48 h-48" alt="pfp" />
    <h1 class="text-8xl">ciru</h1>
    <h2 class="text-xs">top 20 osu player.</h2>
  </section>
  <div class="divider divider-vertical text-xs">Links.</div>
  <section class="flex justify-center w-2/5">
    {#each links as link}
      {#if links.indexOf(link) == 0}
        <button id="discord" on:click={() => {handleClick()}} class="tooltip tooltip-bottom rounded-l-full p-4 w-full" data-tip={link.tooltip} style="background-color: {link.color};">
          <i class={link.class} />
        </button>
      {:else if links.indexOf(link) == links.length - 1}
        <a href={link.url} class="tooltip tooltip-bottom rounded-r-full p-4 w-full" data-tip={link.tooltip} style="background-color: {link.color};">
          <i class={link.class} />
        </a>
      {:else if links.indexOf(link) == links.length - 1}
      <a href={link.url} class="tooltip tooltip-bottom rounded-r-full p-4 w-full" data-tip={link.tooltip} style="background-color: {link.color};">
        <i class={link.class} />
      </a>
      {:else if links.indexOf(link) == 2}
        <a href={link.url} class="tooltip tooltip-bottom p-4 w-full" data-tip={link.tooltip} style="background-color: {link.color};">
          <img src={link.path} class={link.class} alt="osu-logo">
        </a>
      {:else}
        <a href={link.url} class="tooltip tooltip-bottom p-4 w-full" data-tip={link.tooltip} style="background-color: {link.color};">
          <i class={link.class} />
        </a>
      {/if}
    {/each}
  </section>
</div>