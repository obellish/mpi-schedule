import { fetch } from '@sapphire/fetch';
import { sleep } from '@sapphire/utilities';
import type { MovieDetails } from '../types';
import type { PageContextServer } from 'vike/types';

export const data = async (pageContext: PageContextServer): Promise<{ movie: MovieDetails, title: MovieDetails['title'] }> => {
    await sleep(300);
    const response = await fetch<MovieDetails & Record<string, unknown>>(`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`);

    const movie = minimize(response);

    return {
        movie,
        title: movie.title,
    }
}

export type Data = Awaited<ReturnType<typeof data>>;

const minimize = (movie: MovieDetails & Record<string, unknown>): MovieDetails => {
    const { id, title, release_date, director, producer } = movie;
    return { id, title, release_date, director, producer };
}