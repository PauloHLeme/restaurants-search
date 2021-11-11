import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Adress } from './styles'

import restaurantDefault from '../../assets/restaurante-fake.png'
import Skeleton from "../Skeleton";

const RestaurantCard = ({ restaurant, onClick }) => {

  const [ imageLoaded, setImageLoaded] = useState(false)

  return (
    <Restaurant
      onClick={onClick}
    >
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          value={restaurant.rating}
          edit={false}
          activeColor="#e7711c"
        />
        <Adress>
          {restaurant.vicinity || restaurant.formatted_address}
        </Adress>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantDefault}
        onLoad={() => setImageLoaded(true)}
        alt="Foto do Restaurante"
      />
      {!imageLoaded && <Skeleton width='100px' height='100px' />}
    </Restaurant>
  )
}

export default RestaurantCard
