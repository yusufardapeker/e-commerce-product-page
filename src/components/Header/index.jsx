import React, { useContext } from "react";

import "./header.scss";

import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import Cart from "./components/Cart";

import hamburgerMenuIcon from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";

import userProfileImg from "../../images/image-avatar.png";
import { ProductContext } from "../../context/ProductContext";

function index() {
	const { showMobileNav, setShowMobileNav, showCart, toggleCart, count, isCartEmpty } =
		useContext(ProductContext);

	return (
		<header>
			<div className="site-links-wrapper">
				<img
					src={hamburgerMenuIcon}
					className="hamburger-menu-icon"
					onClick={() => setShowMobileNav(true)}
				/>
				<img src={logo} className="logo" />
				<DesktopNav />

				{showMobileNav && <MobileNav />}
			</div>
			<div className="user-info-wrapper">
				<img src={cartIcon} className="cart-icon" onClick={toggleCart} />

				{!isCartEmpty && <span className="cart-count">{count}</span>}

				<img src={userProfileImg} className="user-profile-img" />

				{showCart && <Cart />}
			</div>
		</header>
	);
}

export default index;
