import React from 'react'
import PropTypes from 'prop-types';
import '../css/searchBar.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = ({placeholder}) => {
  return (
    <header>
        <div className='search_bar'>
            <input name="Search" type="text" placeholder={placeholder}/>
            <FontAwesomeIcon className="fa-icon" icon={faMagnifyingGlass} />
        </div>
    </header>
    
  )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string
  };
  
  SearchBar.defaultProps = {
    placeholder: "Search by name",
  }

export default SearchBar
