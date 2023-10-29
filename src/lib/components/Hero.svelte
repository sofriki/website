<script lang="ts">
	export let heroImage: string;
	export let title: string;
	export let subtitle: string;
</script>

<div class="hero min-h-[70vh] bg-base-200" style="background-image: url({heroImage});">
	<div class="hero-overlay bg-opacity-80" />
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">{title}</h1>
			<p class="py-6">
				{@html subtitle}
			</p>
		</div>
	</div>
</div>
