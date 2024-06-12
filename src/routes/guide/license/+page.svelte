<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { License } from '$lib'
  import type { LicensePropsType } from '$lib';

  const basic: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
  }

  const basic2: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
  }

  const style1: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    style: 'flat',
  }
  const style2: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    style: 'flat-square',
  }
  const style3: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    style: 'for-the-badge',
  }
  const style4: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    style: 'plastic',
  }
  const style5: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    style: 'social',
  }

  const style6: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'flat',
  }
  const style7: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'flat-square',
  }
  const style8: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'for-the-badge',
  }
  const style9: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'plastic',
  }
  const style10: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'social',
  }

  const color1: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'indigo',
  }
  const color2: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: '4B0082',
  }
  const color3: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'rgb(75, 0, 130)',
  }
  const color4: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'rgba(75, 0, 130, 1)',
  }
  const color5: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'hsl(275, 100%, 25%)',
  }
  const color6: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'hsla(275, 100%, 25%, 1)',
  }

  const color7: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    color: 'indigo',
  }
  const color8: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    color: '4B0082',
  }
  const color9: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    color: 'rgb(75, 0, 130)',
  }
  const color10: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    color: 'rgba(75, 0, 130, 1)',
  }
  const color11: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    color: 'hsl(275, 100%, 25%)',
  }
  const color12: LicensePropsType = {
    license: 'npm',
    npm_packageName: 'svelte-shields',
    color: 'hsla(275, 100%, 25%, 1)',
  }

  const logo_label: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    logo: 'svelte',
    label: 'LICENSE',
  }

  const link: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    logo: 'svelte',
    link: ['https://github.com/shinokada/svelte-shields', 'https://svelte-shields.codewithshin.com'],
  }

  const other: LicensePropsType = {
    license: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    logo: 'svelte',
    label: 'Svelte Shields',
    cacheSeconds: '86400',
  }


  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>License Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<H3>Basic usage</H3>
<p>Use <Code>npm</Code> or <Code>github</Code> for <Code>license</Code>. For <Code>github</Code>, <Code>github_user</Code> and <Code>github_repo</Code> are required. For <Code>npm</Code>, <Code>npm_packageName</Code> is required.</p>

<CodeWrapper c_w_div='grid gap-4'>
  <License {...basic} />
  <License {...basic2} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>

<CodeWrapper c_w_div='grid gap-4'>
  <License {...style1} />
  <License {...style2} />
  <License {...style3} />
  <License {...style4} />
  <License {...style5} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style1.md'] as string} />

<CodeWrapper c_w_div='grid gap-4'>
  <License {...style6} />
  <License {...style7} />
  <License {...style8} />
  <License {...style9} />
  <License {...style10} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style2.md'] as string} />

<H3>Color</H3>

<CodeWrapper c_w_div='grid gap-4'>
  <License {...color1} />
  <License {...color2} />
  <License {...color3} />
  <License {...color4} />
  <License {...color5} />
  <License {...color6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color1.md'] as string} />

<CodeWrapper c_w_div='grid gap-4'>
  <License {...color7} />
  <License {...color8} />
  <License {...color9} />
  <License {...color10} />
  <License {...color11} />
  <License {...color12} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color2.md'] as string} />

<H3>Logo and Label</H3>

<CodeWrapper c_w_div='grid gap-4'>
  <License {...logo_label} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/logo_and_label.md'] as string} />

<H3>Link</H3>

<CodeWrapper c_w_div='grid gap-4'>
  <License {...link} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H3>Other</H3>

<CodeWrapper c_w_div='grid gap-4'>
  <License {...other} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />