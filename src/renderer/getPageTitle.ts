import type { PageContext } from 'vike/types';

export const getPageTitle = (pageContext: PageContext): string => {
	// @ts-expect-error data and config are both poorly typed
	const title = pageContext.data?.title || pageContext.config.title || 'Vike Demo';
	return title;
};
export default getPageTitle;
