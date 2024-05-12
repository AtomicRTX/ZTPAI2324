import React from 'react'
import Restaurant from './Restaurant'

const RestaurantList = ({ restaurants }) => {
  return (
    <div>
        {restaurants.map((restaurant) => (<Restaurant restaurant = {restaurant}/>))}
    </div>
  )
}

export default RestaurantList
