import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { GlobalContext } from '../../provider/Index';
import "./style.css"

const Searchbar = () => {
    const globalStore = useContext(GlobalContext);
    const setSearchedText = globalStore.setSearchedText;
    const onSearchChange = (e) => {
        setSearchedText(e.target.value);
      };
  return (
    <div className="search--container">
      <span className='search--wrapper' >
        <input
          className="search--field"
          type="search"
          placeholder="Search for products..."
          onChange={(e)=>onSearchChange(e)}
        />
        <FaSearch className="search-icon" />
      </span>
    </div>
  )
}

export default Searchbar
