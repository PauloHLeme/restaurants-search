import React from "react";
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Adress } from './styles'
import restaurant from '../../assets/restaurante-fake.png'

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Restaurant Name</Title>
      <ReactStars count={5} isHalf value={4.5} edit={false} activeColor="#e7711c"/>
      <Adress>Avenida 66A, 1849, Vila Cristina - Rio Claro, SP</Adress>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurant} alt="Foto do restaurante"/>
  </Restaurant>
)

export default RestaurantCard
