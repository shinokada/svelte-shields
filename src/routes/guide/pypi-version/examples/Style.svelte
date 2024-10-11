<script lang="ts">
  import { PypiVersion, type PypiVersionPropsType } from '$lib';

  const style1: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'flat'
  };
  const style2: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'flat-square'
  };
  const style3: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'for-the-badge'
  };
  const style4: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'plastic'
  };
  const style5: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'social'
  };
</script>

<div class="grid gap-4">
  <PypiVersion {...style1} />
  <PypiVersion {...style2} />
  <PypiVersion {...style3} />
  <PypiVersion {...style4} />
  <PypiVersion {...style5} />
</div>
