import React, { type FC } from 'react';
import Link from './Link';
import type { PageContext } from 'vike/types';
import { PageContextProvider } from './usePageContext';
import { CommonProps } from '../types';

export interface LayoutProps extends CommonProps {
	pageContext: PageContext;
}

export const Layout: FC<LayoutProps> = ({ children, pageContext }) => {
	return (
		<React.StrictMode>
			<PageContextProvider pageContext={pageContext}>
				<Frame>
					<Sidebar>
						<Link href="/">Welcome</Link>
					</Sidebar>
					<Content>{children}</Content>
				</Frame>
			</PageContextProvider>
		</React.StrictMode>
	);
};

const Frame: FC<CommonProps> = ({ children }) => {
	return <div style={{ display: 'flex', maxWidth: 900, margin: 'auto' }}>{children}</div>;
};

const Sidebar: FC<CommonProps> = ({ children }) => {
	return (
		<div
			id="sidebar"
			style={{
				padding: 20,
				flexShrink: 0,
				display: 'flex',
				flexDirection: 'column',
				lineHeight: '1.8em',
				borderRight: '2px solid #eee',
			}}
		>
			{children}
		</div>
	);
};

const Content: FC<CommonProps> = ({ children }) => {
	return (
		<div id="page-container">
			<div id="page-content" style={{ padding: 20, paddingBottom: 50, minHeight: '100vh' }}>
				{children}
			</div>
		</div>
	);
};

export default Layout;
