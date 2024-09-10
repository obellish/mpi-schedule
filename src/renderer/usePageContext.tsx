import React, { useContext, type FC } from 'react';
import type { PageContext } from 'vike/types';
import type { CommonProps } from '../types';

const Context = React.createContext<PageContext>(undefined as unknown as PageContext);

export interface PageContextProviderProps extends CommonProps {
	pageContext: PageContext;
}

export const PageContextProvider: FC<PageContextProviderProps> = ({ pageContext, children }) => {
	return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

export const usePageContext = (): PageContext => useContext(Context);
