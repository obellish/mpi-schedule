import { type FC, lazy, Suspense } from 'react';

const Card = lazy(() => import('./Card'));

export const App: FC = () => {
	return (
		<>
			<Suspense fallback={<p>Loading card component...</p>}>
				<Card />
			</Suspense>
		</>
	)
};

export default App;
