import React from 'react'
import '../css/categories.css';
import Category from './Category'

const Categories = () => {
  const categories = [
    { url: "/categoryPage/italian", name: "Italian", image: "../../img/category/pizza.svg" },
    { url: "/categoryPage/indian", name: "Indian", image: "../../img/category/indian.svg" },
    { url: "/categoryPage/sushi", name: "Sushi", image: "../../img/category/sushi.svg" },
    { url: "/categoryPage/mexican", name: "Mexican", image: "../../img/category/mexican.svg" },
    { url: "/categoryPage/thai", name: "Thai", image: "../../img/category/thai.svg" },
    { url: "/categoryPage/vietnamese", name: "Vietnamese", image: "../../img/category/vietnamese.svg" },
    { url: "/categoryPage/seafood", name: "Seafood", image: "../../img/category/seafood.svg" },
    { url: "/categoryPage/chinese", name: "Chinese", image: "../../img/category/chinese.svg" },
    { url: "/categoryPage/burgers", name: "Burgers", image: "../../img/category/burgers.svg" },
    { url: "/categoryPage/vegetarian", name: "Vegetarian", image: "../../img/category/vegetarian.svg" }
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
