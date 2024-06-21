import React from "react";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Logo from "./Logo/Logo";

import NavBar from "./NavBar/Navbar";

import CardIcon from "../shared/CartIcon/CardIcon";
import User from "./User/User";

import Cart from "./Cart/Cart";

import styles from "./styles.module.css";

function Header() {
	return (
		<div className="container">
			<header>
				<div className={styles.menuLogoWrapper}>
					<HamburgerMenu />
					<Logo />
				</div>

				<div className={styles.userCartWrapper}>
					<CardIcon color="#69707D" />
					<User />
				</div>
			</header>
		</div>
	);
}

export default Header;
