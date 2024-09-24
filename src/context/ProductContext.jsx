import React, { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [count, setCount] = useState(0);

	const hideMobileNav = () => setShowMobileNav(false);
	const unHideMobileNav = () => setShowMobileNav(true);

	const toggleCart = () => setShowCart(!showCart);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));

	return (
		<ProductContext.Provider
			value={{
				showMobileNav,
				hideMobileNav,
				unHideMobileNav,
				showCart,
				toggleCart,
				count,
				increment,
				decrement,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductProvider;
