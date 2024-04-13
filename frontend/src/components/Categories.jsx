import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../css/categories.css';
import Category from './Category'

const Categories = () => {
  const categories = [
    { url: "/categories_page?cat=italian", name: "Italian", image: "../../img/category/pizza.svg" },
    { url: "/categories_page?cat=indian", name: "Indian", image: "../../img/category/indian.svg" },
    { url: "/categories_page?cat=sushi", name: "Sushi", image: "../../img/category/sushi.svg" },
    { url: "/categories_page?cat=mexican", name: "Mexican", image: "../../img/category/mexican.svg" },
    { url: "/categories_page?cat=thai", name: "Thai", image: "../../img/category/thai.svg" },
    { url: "/categories_page?cat=vietnamese", name: "Vietnamese", image: "../../img/category/vietnamese.svg" },
    { url: "/categories_page?cat=seafood", name: "Seafood", image: "../../img/category/seafood.svg" },
    { url: "/categories_page?cat=chinese", name: "Chinese", image: "../../img/category/chinese.svg" },
    { url: "/categories_page?cat=burgers", name: "Burgers", image: "../../img/category/burgers.svg" },
    { url: "/categories_page?cat=vegetarian", name: "Vegetarian", image: "../../img/category/vegetarian.svg" }
  ];

  return (
    <div>
      <div className="categories">
        {categories.map((category) => (
          <Category url={category.url} name={category.name} image={category.image} />
        ))}
      </div>
    </div>
  )
}
export default Categories
