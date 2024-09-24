import React, { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const [showCart, setShowCart] = useState(false);

	const hideMobileNav = () => setShowMobileNav(false);
	const unHideMobileNav = () => setShowMobileNav(true);

	const toggleCart = () => setShowCart(!showCart);

	return (
		<ProductContext.Provider
			value={{
				showMobileNav,
				hideMobileNav,
				unHideMobileNav,
				showCart,
				toggleCart,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductProvider;
