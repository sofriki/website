<script lang="ts">
	import AboutUs from '$lib/components/AboutUs.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>ŠO FRI - FRiKi</title>
</svelte:head>

<div>
	<Hero
		title={data.title}
		subtitle={data.subtitle}
		heroImage={data.heroImage.data.attributes.url}
	/>
	<AboutUs sections={data.aboutUs} />
</div>
