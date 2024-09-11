import type { FC } from 'react';
import { usePageContext } from './usePageContext';
import type { CommonProps } from '../types';
import clsx from 'clsx';
import style from './Link.module.scss';

export interface LinkProps extends CommonProps {
	href: string;
	className?: string;
}

export const Link: FC<LinkProps> = (props) => {
	const { urlPathname } = usePageContext();
	const { href } = props;
	const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href);
	// const className = [props.className, isActive && 'is-active'].filter(Boolean).join(' ');
	return <a {...props} className={clsx(props.className, isActive && style['is-active'])} />;
};

export default Link;
