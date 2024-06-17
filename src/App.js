
import { Component } from "react";

import MovieList from "./MovieList";
import NavBar from "./NavBar";
import { movies } from "./moviesData";


export class App extends Component {


    constructor() {
        super();
        this.state = {
            movies: movies,
            cartCount: 0
        }
    }

    handleIncStars = (movie) => {

        const { movies } = this.state
        const movieId = movies.indexOf(movie);

        if (movies[movieId].starCount < 5) {
            movies[movieId].starCount += 0.5
        }
        else {
            return
        }
        this.setState({
            movies: movies
        })
    }

    handleDecStars = (movie) => {
        const { movies } = this.state
        const movieId = movies.indexOf(movie)

        if (movies[movieId].starCount > 0) {
            movies[movieId].starCount -= 0.5
        }
        else {
            return
        }

        this.setState({
            movies: movies
        })
    }

    handleCart = (movie) => {
        const { movies } = this.state
        const movieId = movies.indexOf(movie)
        movies[movieId].inCart = !movies[movieId].inCart

        this.setState({
            movies
        })
    }

    handleFav = (movie) => {
        const { movies } = this.state
        const movieId = movies.indexOf(movie)
        movies[movieId].fav = !movies[movieId].fav

        this.setState({
            movies
        })
    }

    render() {
        const { movies } = this.state;
        return (
            <>
                <NavBar />
                <MovieList movies = {movies}
                    addStars = {this.handleIncStars}
                    decreaseStars = {this.handleDecStars}
                    handleCart = {this.handleCart}
                    handleFav = {this.handleFav}
                />
            </>
        )
    }
}

export default App
