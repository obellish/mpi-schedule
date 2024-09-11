export interface Movie {
	id: string;
	title: string;
	release_date: string;
}

export interface MovieDetails extends Movie {
	director: string;
	producer: string;
}
