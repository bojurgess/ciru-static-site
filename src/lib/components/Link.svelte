<script lang="ts">
	import type { Link } from '../../types';

	import { fade } from 'svelte/transition';
	import {
		autoUpdate,
		offset,
		flip,
		arrow,
		useFloating,
		FloatingArrow,
		useHover,
		useInteractions,
		useRole,
		useDismiss
	} from '@skeletonlabs/floating-ui-svelte';
	import toast from 'svelte-french-toast';

	interface Props {
		link: Link;
	}

	let open = $state(false);
	let elemArrow: HTMLElement | null = $state(null);

	const floating = useFloating({
		whileElementsMounted: autoUpdate,
		get open() {
			return open;
		},
		onOpenChange: (v) => (open = v),
		placement: 'bottom',
		get middleware() {
			return [offset(10), flip(), elemArrow && arrow({ element: elemArrow })];
		}
	});

	// Interactions
	const role = useRole(floating.context, { role: 'tooltip' });
	const hover = useHover(floating.context, { move: false });
	const dismiss = useDismiss(floating.context);
	const interactions = useInteractions([role, hover, dismiss]);

	const click = (l: Link) => {
		if ('href' in l) {
			window.open(l.href, '_blank');
		} else {
			navigator.clipboard.writeText(l.clipboard);
			toast.success('Copied to clipboard!', {
				style: 'background-color: #000; color: #fff;',
				iconTheme: {
					primary: '#fff',
					secondary: '#000'
				}
			});
		}
	};

	let { link }: Props = $props();
</script>

<button
	id="link-{link.id}"
	bind:this={floating.elements.reference}
	{...interactions.getReferenceProps()}
	role={'href' in link ? 'link' : 'button'}
	style="background-color: {link.color};"
	onclick={() => click(link)}
	class="h-12 w-12 sm:w-16 sm:p-4 shadow-2xl rounded-2xl flex items-center justify-center"
>
	<span class="w-6 block" style="fill: white;">{@html link.icon}</span>
</button>
{#if open}
	<div
		bind:this={floating.elements.floating}
		style={floating.floatingStyles}
		{...interactions.getFloatingProps()}
		class="floating popover-neutral bg-black rounded-xl p-2 px-4 text-sm text-center text-white"
		transition:fade={{ duration: 200 }}
	>
		<p>
			{link.tooltip}
		</p>
		<FloatingArrow bind:ref={elemArrow} context={floating.context} fill="#000" />
	</div>
{/if}
