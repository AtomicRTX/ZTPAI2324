import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Category = ({ url, name, image }) => {
  return (
    <Link to={url} className="cat">
        <img src={image} alt={name.toUpperCase()}/>
        <p>{name}</p>
    </Link>
  )
}

Category.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string
}

Category.defaultProps = {
  url: "",
  name: "Category name",
  image: ""
}

export default Category
