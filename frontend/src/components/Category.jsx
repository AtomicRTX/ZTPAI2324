import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ url, name, image }) => {
  return (
    <Link to={url} className="cat">
      <img src={image} alt={name.toUpperCase()}/>
      <p>{name}</p>
    </Link>
  )
}

export default Category
