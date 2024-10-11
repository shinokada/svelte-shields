<script lang="ts">
  import { JsrVersion, type JsrVersionPropsType } from '$lib';

  const color1: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    color: 'green'
  };

  const color2: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    color: '00FF00'
  };

  const color3: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    color: 'rgb(0, 255, 0)'
  };

  const color4: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    color: 'rgba(0, 255, 0, 1)'
  };

  const color5: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    color: 'hsl(120, 100%, 50%)'
  };

  const color6: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    color: 'hsla(120, 100%, 50%, 1)'
  };
</script>

<div class="grid gap-4">
  <JsrVersion {...color1} />
  <JsrVersion {...color2} />
  <JsrVersion {...color3} />
  <JsrVersion {...color4} />
  <JsrVersion {...color5} />
  <JsrVersion {...color6} />
</div>
