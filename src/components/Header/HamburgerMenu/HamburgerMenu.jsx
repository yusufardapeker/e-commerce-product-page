import React, { useState } from "react";

import menuIcon from "../../../images/icon-menu.svg";

import styles from "./styles.module.css";

import closeIcon from "../../../images/icon-close.svg";

function HamburgerMenu() {
	const [show, setShow] = useState(false);

	const showMobileNav = () => {
		setShow(true);
	};

	const hideMobileNav = () => {
		setShow(false);
	};

	return (
		<>
			<img src={menuIcon} onClick={showMobileNav} />
			{show && (
				<div className={styles.hamburgerMenu}>
					<div className={styles.mobileNav}>
						<img src={closeIcon} onClick={hideMobileNav} className={styles.closeIcon} />

						<ul className={styles.navLinks}>
							<li className={styles.link}>Collections</li>
							<li className={styles.link}>Men</li>
							<li className={styles.link}>Women</li>
							<li className={styles.link}>About</li>
							<li className={styles.link}>Contact</li>
						</ul>
					</div>
					<div className={styles.overlay}></div>
				</div>
			)}
		</>
	);
}

export default HamburgerMenu;
