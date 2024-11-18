import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ parent }) => {
  // Get the parent layout data
  const parentData = await parent();

  return {
    ...parentData
  };
};
