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

<H2>Handling Badge Load Failures</H2>

<p>
	Badges may fail to load due to network issues or service downtime. Here's how to add safeguards to
	gracefully handle these scenarios:
</p>

<CodeWrapper>
	<ExampleComponents.SafeGuard />
	{#snippet codeblock()}
		<HighlightCompo
			lang="ts"
			replaceLib="svelte-shields"
			code={exampleModules['./examples/SafeGuard.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<p>
	This pattern allows you to detect when badges fail to load and provide appropriate fallback UI,
	improving the user experience when external services are unavailable.
</p>

<H2>Key Features</H2>

<ul>
	<li>✅ Simple, presentational components with minimal dependencies</li>
	<li>✅ Full TypeScript support with comprehensive prop types</li>
	<li>✅ Supports all shields.io badge styles and customization options</li>
	<li>✅ Browser-native error handling - leverage standard <code>img</code> behavior</li>
	<li>✅ Flexible - implement your own error handling strategies</li>
</ul>
