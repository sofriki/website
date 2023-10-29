<script lang="ts">
	import type { LinkData } from '$lib/api/types';

	export let link: LinkData;
</script>

<div class="card w-72 bg-base-100 shadow-xl image-full">
	<figure>
		<img src={link.attributes.cover.data.attributes.url} alt="Gallery cover" />
	</figure>
	<div class="card-body flex flex-column">
		<h2 class="card-title">{link.attributes.display}</h2>
		<p />
		<div class="card-actions justify-end">
			<a href={link.attributes.link} target="_blank">
				<button class="btn btn-primary">Odpri</button>
			</a>
		</div>
	</div>
</div>
