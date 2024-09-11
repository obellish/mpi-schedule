import { fetch } from '@sapphire/fetch';
import { sleep } from '@sapphire/utilities';
import type { MovieDetails, Movie } from '../types';
import type { PageContextServer } from 'vike/types';

export const data = async (
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_pageContext: PageContextServer,
): Promise<{ movies: Movie[]; title: string }> => {
	await sleep(700);

	const response = await fetch<MovieDetails[]>('https://brillout.github.io/star-wars/api/films.json');

	const movies = minimize(response);

	return {
		movies,
		title: `${movies.length} Star Wars Movies`,
	};
};

export type Data = Awaited<ReturnType<typeof data>>;

const minimize = (movies: MovieDetails[]): Movie[] =>
	movies.map((movie) => {
		const { title, release_date, id } = movie;
		return { title, release_date, id };
	});
