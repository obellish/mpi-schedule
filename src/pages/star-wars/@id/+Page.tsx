import type { FC } from "react";
import { useData } from "../../../renderer/useData";
import type { Data } from "./+data";

export const Page: FC = () => {
    const { movie } = useData<Data>();
    return (
        <>
            <h1>{movie.title}</h1>
            Release Date: {movie.release_date}
            <br />
            Director: {movie.director}
            <br />
            Producer: {movie.producer}
        </>
    )
}