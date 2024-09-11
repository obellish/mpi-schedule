import type { ReactNode, FC } from 'react';
import type { CommonProps } from '../../types';
import { usePageContext } from '../../renderer/usePageContext';
import styles from './Page.module.scss';

export const Page: FC = () => {
	const pageContext = usePageContext();
	let abortReason = pageContext.abortReason as ReactNode;
	if (!abortReason) {
		abortReason = pageContext.is404 ? 'Page not found.' : 'Something went wrong.';
	}

	return (
		<Center>
			<p className={styles.error}>{abortReason}</p>
		</Center>
	);
};

const Center: FC<CommonProps> = ({ children }) => <div className={styles.center}>{children}</div>;
