<script lang="ts">
	import type { LinkData } from '$lib/api/types';

	export let link: LinkData;
</script>

<svelte:head>
	<title>FRiKi - Povezave</title>
</svelte:head>

<!-- <div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{link.attributes.display}</h2>
		<a href={link.attributes.link} target="_blank">
			<button class="btn btn-primary">Odpri</button>
		</a>
	</div>
</div> -->

<button class="btn w-96 max-[900px]:w-9/12">
	{link.attributes.display}
</button>
