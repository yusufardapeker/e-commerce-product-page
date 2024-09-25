import React, { useContext } from "react";

import closeIcon from "../../../images/icon-close.svg";
import { ProductContext } from "../../../context/ProductContext";

function MobileNav({}) {
	const { setShowMobileNav } = useContext(ProductContext);

	return (
		<>
			<div className="mobile-nav">
				<img src={closeIcon} className="close-icon" onClick={() => setShowMobileNav(false)} />

				<nav className="mobile-menu-links">
					<a href="#" className="mobile-menu-link">
						Collections
					</a>
					<a href="#" className="mobile-menu-link">
						Men
					</a>
					<a href="#" className="mobile-menu-link">
						Women
					</a>
					<a href="#" className="mobile-menu-link">
						About
					</a>
					<a href="#" className="mobile-menu-link">
						Contact
					</a>
				</nav>
			</div>

			<span className="mobile-overlay"></span>
		</>
	);
}

export default MobileNav;
