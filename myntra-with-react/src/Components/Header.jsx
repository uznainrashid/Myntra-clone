import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsPerson  } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
 const bag =  useSelector(store=>store.bag)
  return (
    <div>
      <header>
        <div className="logo-container">
          <Link to="/">
            <img
              className="logo-image"
              src="images/myntra_logo.webp"
              alt="myntra"
            />
          </Link>
        </div>
        <div className="nav_bar">
          <a href="#">Home</a>
          <a href="#">Women</a>
          <a href="#">Kid</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>new</sup>
          </a>
        </div>
        <div className="search_bar "> <span className="search-icons"><CiSearch/></span>
          <input
            className="input-search"
            placeholder="Search for products,brands and more"
          />
        </div>
        <div className="icons_bar">
          <div className="action_container"><BsPerson />
            <span className="action-name">Profile</span>
          </div>
          <div className="action_container"><FaRegHeart/>
            <span className="action-name">Wishlist</span>
          </div>
            <Link className=" action_container " to="/bag" style={{ color: "black" }}>
          <LuShoppingCart/>
             <span className="action-name">bag</span> 
            <span className="bag-item-count">{bag.length}</span>
            </Link>
          
        </div>
      </header>
    </div>
  );
};

export default Header;
