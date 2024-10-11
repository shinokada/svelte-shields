<script lang="ts">
  import { PypiVersion, type PypiVersionPropsType } from '$lib';

  const basic: PypiVersionPropsType = {
    packageName: 'vennfig'
  };
</script>

<PypiVersion {...basic} />
