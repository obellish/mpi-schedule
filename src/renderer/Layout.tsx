import React, { type FC } from 'react';
import Link from './Link';
import type { PageContext } from 'vike/types';
import { PageContextProvider } from './usePageContext';
import { CommonProps } from '../types';
import './css/index.css';
import './Layout.css';
import style from './Layout.module.scss';

export interface LayoutProps extends CommonProps {
	pageContext: PageContext;
}

export const Layout: FC<LayoutProps> = ({ children, pageContext }) => {
	return (
		<React.StrictMode>
			<PageContextProvider pageContext={pageContext}>
				<Frame>
					<Sidebar>
						<Link href='/'>Welcome</Link>
					</Sidebar>
					<Content>{children}</Content>
				</Frame>
			</PageContextProvider>
		</React.StrictMode>
	);
};

const Frame: FC<CommonProps> = ({ children }) => {
	return <div className={style.frame}>{children}</div>;
};

const Sidebar: FC<CommonProps> = ({ children }) => {
	return <div className={style.sidebar}>{children}</div>;
};

const Content: FC<CommonProps> = ({ children }) => {
	return (
		<div id='page-container'>
			<div id='page-content' className={style.content}>{children}</div>
		</div>
	);
};

export default Layout;
