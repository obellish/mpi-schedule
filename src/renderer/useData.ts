import { usePageContext } from './usePageContext';

export const useData = <Data>(): Data => {
	const { data } = usePageContext();

	return data as Data;
};
