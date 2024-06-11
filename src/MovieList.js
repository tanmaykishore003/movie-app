
import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
    render() {

        return(
            <>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                
            </>
        )
    }
}

export default MovieList;