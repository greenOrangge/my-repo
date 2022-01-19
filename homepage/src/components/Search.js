import React from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
          <div class="icon">
            <BsSearch size="1.5em" />
          </div>
        </button>
      </div>
      <div class="loginBtn">
        <form action="https://google.com">
          <button id="login">login</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
