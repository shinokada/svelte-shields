<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { NpmVersion } from '$lib'
  import type { NpmVersionPropsType } from '$lib';

const badge: NpmVersionPropsType = {
  packageName: 'flowbite-svelte-icons',
  label: 'flowbite-svelte-icons',
  tag: 'next',
}
const badge1: NpmVersionPropsType = {
  packageName: 'flowbite-svelte-icons',
  label: 'flowbite-svelte-icons',
  tag: 'next',
  style: 'social',
  cacheSeconds: '86400',
  link: ['https://codewithshin.com', 'https://flowbite-svelte-icons.codewithshin.com']
}
const badge2: NpmVersionPropsType = {
  packageName: 'flowbite-svelte-icons',
  label: 'flowbite-svelte-icons',
  style: 'for-the-badge',
  cacheSeconds: '86400',
  logo: 'svelte',
  logoColor: 'green',
}
const badge3: NpmVersionPropsType = {
  packageName: 'flowbite-svelte-icons',
  label: 'flowbite-svelte-icons',
  style: 'plastic',
  cacheSeconds: '86400',
  logo: 'npm',

}
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>NpmVersion component</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<CodeWrapper>
<NpmVersion {...badge} />

<NpmVersion {...badge1} />

<NpmVersion {...badge2} />

<NpmVersion {...badge3} />
</CodeWrapper>