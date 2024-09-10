import { FC } from 'react';
import Counter from './Counter';

export const Page: FC = () => (
	<>
		<h1>Welcome</h1>
		This page is:
		<ul>
			<li>Rendered to HTML.</li>
			<li>
				Interactive <Counter />
			</li>
		</ul>
	</>
);
