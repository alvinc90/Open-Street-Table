import React from 'react';
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';

const CityShowRestaurantItem = ({ restaurant, reviews, city }) => {
        let reviewRes = reviews.filter((review) => review.restaurant_id === restaurant.id);
        let total = 0;
        reviewRes.forEach((rev) => total += rev.overall)
        let avg = total / reviewRes.length
        let rating;
        if (avg >= 4.5) {
            rating = 5
        } else if (avg >= 3.5 && avg < 4.5) {
            rating = 4
        } else if (avg >= 2.5 && avg < 3.5) {
            rating = 3
        } else if (avg >= 1.5 && avg < 2.5) {
            rating = 2
        } else {
            rating = 1
        }

        let dollarSign;
        if (restaurant.price === 2) {
            dollarSign = "$$"
        } else if (restaurant.price === 3) {
            dollarSign = "$$$"
        } else if (restaurant.price ===4) {
            dollarSign = "$$$$"
        }
    return(
        <div className="city-show-item-container">

            <Link to={`/restaurants/${restaurant.id}`}><div>
                <img className="city-show-restaurant-image" src={restaurant.photourl} alt="aws picture"/>
            </div></Link>

            <div className="city-show-item-div">
                <Link className="city-show-item-link" to={`/restaurants/${restaurant.id}`}>
                    <h1 className="city-show-item-heading">{restaurant.name}</h1>
                </Link>
                {[...Array(rating)].map((star) => {
                    return <FaStar className="y2" color="crimson" size={22} />
                })}
                <h6 className="y6">{restaurant.cuisine}</h6>
                <h6 className="y1">{dollarSign}</h6>
                <h6 className="y5">{city.name}</h6>
            </div>
        </div>
    )
};

export default CityShowRestaurantItem;

