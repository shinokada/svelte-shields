<script lang="ts">
	import { CodeWrapper, H2 } from 'runes-webkit';
	import { HighlightCompo } from 'svelte-rune-highlight';
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<h1>Quickstart - Svelte Shields</h1>

<p>Svelte Shields is a collection of Shields badges for Svelte Runes.</p>

<H2>Installation</H2>

<HighlightCompo lang="ts" code={exampleModules['./examples/installation.md'] as string} />

<H2>Basic usage</H2>

<CodeWrapper>
	<ExampleComponents.Basic />
	{#snippet codeblock()}
		<HighlightCompo
			lang="ts"
			replaceLib="svelte-shields"
			code={exampleModules['./examples/Basic.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>
