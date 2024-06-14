import React from "react";

class MovieCard extends React.Component {

    render() {
        // const {movies: data} = this.props
        // console.log(data);
        const { title, plot, poster, price, rating, starCount, fav, inCart } = this.props.movies;
        const { addStars, decreaseStars, handleCart, handleFav, movies } = this.props;

        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={poster} alt="Poster" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" alt="decrease" onClick={() => {decreaseStars(movies)}} />

                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" />

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase" onClick={() => {addStars(movies) }} />

                                <span className="starCount">{starCount}</span>
                            </div>

                            {fav ? (
                                <button className="fav-btn" onClick={() => handleFav(movies)}>Favourites</button>
                            ) : (
                                <button className="unfavourite-btn" onClick={() => handleFav(movies)}>Un-Favourite</button>
                            )}

                            <button onClick={() => handleCart(movies)} className={inCart?"unfavourite-btn": "cart-btn"}>{inCart?"Remove from cart":"Add to cart"}</button>

                            {/* <button className="cart-btn">Add to cart</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;