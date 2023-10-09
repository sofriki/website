<script lang="ts">
	import Carousel from './Carousel.svelte';

	import venice from '$lib/assets/friki/venice.jpg';
	import paintball from '$lib/assets/friki/paintball.jpg';
	import bowling1 from '$lib/assets/friki/bowling1.jpg';
	import bowling2 from '$lib/assets/friki/bowling2.jpg';

	const images: string[] = [venice, paintball, bowling1, bowling2];
</script>

<div class="flex flex-col mx-48 my-8 max-[900px]:mx-8">
	<h1 class="text-4xl font-bold">O FRiKih</h1>
	<br />
	<h2 class="text-2xl font-bold">
		Kaj je študentska organizacija FRI (ŠO FRI - FRiKi) in kako deluje?
	</h2>
	<p>
		Smo del Študentske organizacije Univerze v Ljubljani (<a
			href="https://www.sou-lj.si/sl"
			target="_blank">ŠOU LJ</a
		>). Tako kot na ostalih fakultetah Univerze v Ljubljani, jo ima tudi FRI. Kljub temu nismo del
		FRI-ja, ampak Študentske organizacije Univerze
	</p>
	<br />
	<h2 class="text-2xl font-bold">Kdo smo FRiKi?</h2>
	<p>
		Smo vaši vrstniki, ekipa študentov FRI-ja, izvoljena v Študentsko organizacijo FRI. Študentje
		višjih letnikov, bruci, pavzerji, ponavljalci, you name it. Združuje nas želja, da bi od
		študentskega življenja odnesli nekaj več.
	</p>

	<div class="divider" />

	<p>
		Naš cilj je, da ponudimo bogato obštudijsko dogajanje vsem, ki obiskujete našo fakulteto. To
		vključuje razne zabavne in izobraževalne dogodke, žure in mnogo več. Ti niso vaši povprečni
		skupinski projekti na faksu, ki ne zapustijo predavalnice, ampak jih tudi izvedemo od A do Ž. Za
		njih dobimo le finance ter nasvete pri izvedbe.
		<br />
		Smo del največje študentske skupine v Sloveniji, skupine Povezani, ki združuje študentske organizacije
		več fakultet Univerze v Ljubljani.
	</p>

	<br />

	<Carousel {images} />
</div>
