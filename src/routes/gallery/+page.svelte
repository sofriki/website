<script lang="ts">
	const images: string[] = [];
</script>

<div class="min-h-screen">
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		{#each images as image}
			<div>
				<img class="h-auto max-w-full rounded-lg" src={image} alt="Gallery content" />
			</div>
		{/each}
	</div>
</div>
