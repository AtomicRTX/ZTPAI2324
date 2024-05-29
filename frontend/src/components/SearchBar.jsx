import React, { useState } from 'react'

import '../css/searchBar.css';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = ({onSearch}) => {
  
    const [inputText, setInputText] = useState("");

    const inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
      onSearch(lowerCase);
    };

    return (
      <header>
          <div className='search_bar'>
              <input name="Search" type="text" placeholder="Search by name" value={inputText} onChange={inputHandler}/>
              <FontAwesomeIcon className="fa-icon" icon={faMagnifyingGlass} />
          </div>
      </header>
      
    )
}

export default SearchBar
