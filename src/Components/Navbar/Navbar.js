import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider';
const Navbar = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__img"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__navLink">
          <div className="header__navLink--option">
            <span className="line-one">Hello, Sign in</span>
            <span className="line-two">Account & Lists</span>
          </div>
        </Link>
        <Link to="/login" className="header__navLink">
          <div className="header__navLink--option">
            <span className="line-one">Returns</span>
            <span className="line-two">& Orders</span>
          </div>
        </Link>


        <Link to="/cart" className="header_navLink">
          <div className="header__navLink--cart">
            <ShoppingBasketIcon />
            <span className="cart-count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
