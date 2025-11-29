<script lang="ts">
	import { JsrVersion, type JsrVersionPropsType } from '$lib';

	const logo_label: JsrVersionPropsType = {
		scope: '@hono',
		packageName: 'hono',
		logo: 'hono',
		label: 'HONO'
	};
</script>

<JsrVersion {...logo_label} />
