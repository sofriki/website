<script lang="ts">
	import type { UORep } from '$lib/api/types';
	import { getImageUrl } from '$lib/api/utils';

	export let person: UORep;
</script>

<div class="flex flex-col justify-items-center items-center">
	<div class="avatar">
		<div class="w-36 rounded-full">
			<img
				src={getImageUrl(person.attributes.image.data.attributes.url)}
				alt={person.attributes.name}
			/>
		</div>
	</div>
	<p class="text-xl font-bold pt-2 text-center">{person.attributes.name}</p>
	<p class="text-center">{person.attributes.role}</p>
</div>
