
import { Component } from "react";

import MovieCard from "./MovieCard";


class MovieList extends Component {


    render() {

        // const { title, plot, price, rating, starCount, fav, inCart } = this.state
        let { movies, addStars, decreaseStars, handleCart, handleFav } = this.props;
        return (
            <>
                {/* <MovieCard 
                            title = {title}  
                            plot = {plot}
                            price = {price}
                            rating = {rating}
                            starCount = {starCount}
                            fav = {fav}
                            inCart = {inCart}
                />                 */}

                    {movies.map((list) => (
                        <MovieCard 
                            key={list.id}
                            movies = {list}
                            addStars = {addStars}
                            decreaseStars = {decreaseStars}
                            handleCart = {handleCart}
                            handleFav = {handleFav}
                        />
                    ))}

            </>
        )
    }
}

export default MovieList;