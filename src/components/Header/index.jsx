import React from "react";
import styles from "./styles.module.css";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/Navbar";
import CardIcon from "../shared/CartIcon/CardIcon";
import User from "./User/User";
import Cart from "./Cart/Cart";

function Header() {
	return (
		<div className="container">
			<header>
				<div className={styles.menuLogoWrapper}>
					<HamburgerMenu />
					<Logo />
				</div>

				<div className={styles.userCartWrapper}>
					<CardIcon color="#69707D" className={styles.headerSVG} />
					<User />
				</div>
			</header>

			<Cart />
		</div>
	);
}

export default Header;
