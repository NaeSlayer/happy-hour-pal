import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./SearchBar.css";
import API from "../../utils/API";


// SearchBar for Results pages
const SearchBar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navStyle">
        <div>
            <form className="form-inline my-2 my-lg-0">
                <input name="search" onChange={props.onChange} className="form-control mr-sm-2" type="search" placeholder="Current Location" aria-label="Search" />
                <button onClick={props.onClick} className="btn btn-dark my-2 my-sm-0" type="submit">Manual Search</button>
                <button onClick={props.autoClick} className="btn btn-dark my-2 my-sm-0" type="submit">Search Nearby</button>
            </form>
        </div>

        {/* Add Search options here */}

        {/* Add button to access Map/List option here */}

    </nav>
);

export default SearchBar;