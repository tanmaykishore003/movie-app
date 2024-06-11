import React from "react";

class MovieCard extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Avengers: End Game",
            plot: "Supernatural power shown in movie",
            price: 199,
            rating: 8.9,
            starCount: 0,
            fav: true,
            inCart: false,
        }
    }

    addStar = () => {

        // Form1 of setState()

        // this.setState({
        //     starCount: this.state.starCount + 0.5
        // })

        // Form2 of setState()

        if (this.state.starCount < 5) {
            this.setState((prevState) => {
                return {
                    starCount: prevState.starCount + 0.5
                }
            })
        }
        else {
            return;
        }
    }

    decreaseStar = () => {

        if (this.state.starCount > 0) {
            this.setState((prevState) => {
                return {
                    starCount: prevState.starCount - 0.5
                }
            })
        }
        else {
            return;
        }

    }

    handleFav = (event) => {
        event.preventDefault();
        this.setState((prev) => {
            return {
                fav: !(prev.fav)
            }

        })
        // console.log(this.state.fav);
    }

    handleCart = () => {
        this.setState({
            inCart: !(this.state.inCart)
        })
    }


    render() {

        const { title, plot, price, rating, starCount, fav, inCart } = this.state;

        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://rukminim2.flixcart.com/image/850/1000/ju2z6a80/poster/v/9/g/medium-endgameart-avengers-endgame-new-poster-for-room-office-original-imaff9ecy3wgbdtv.jpeg?q=90&crop=false" alt="Poster" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" alt="decrease" onClick={this.decreaseStar} />

                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" />

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase" onClick={this.addStar} />

                                <span className="starCount">{starCount}</span>
                            </div>

                            {fav ? (
                                <button className="fav-btn" onClick={this.handleFav}>Favourites</button>
                            ) : (
                                <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button>
                            )}

                            <button onClick={this.handleCart} className={inCart?"unfavourite-btn": "cart-btn"}>{inCart?"Remove from cart":"Add to cart"}</button>

                            {/* <button className="cart-btn">Add to cart</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;