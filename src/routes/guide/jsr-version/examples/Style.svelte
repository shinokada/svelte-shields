<script lang="ts">
	import { JsrVersion, type JsrVersionPropsType } from '$lib';

	const style1: JsrVersionPropsType = {
		scope: '@hono',
		packageName: 'hono',
		style: 'flat'
	};
	const style2: JsrVersionPropsType = {
		scope: '@hono',
		packageName: 'hono',
		style: 'flat-square'
	};
	const style3: JsrVersionPropsType = {
		scope: '@hono',
		packageName: 'hono',
		style: 'for-the-badge'
	};
	const style4: JsrVersionPropsType = {
		scope: '@hono',
		packageName: 'hono',
		style: 'plastic'
	};
	const style5: JsrVersionPropsType = {
		scope: '@hono',
		packageName: 'hono',
		style: 'social'
	};
</script>

<div class="grid gap-4">
	<JsrVersion {...style1} />
	<JsrVersion {...style2} />
	<JsrVersion {...style3} />
	<JsrVersion {...style4} />
	<JsrVersion {...style5} />
</div>
