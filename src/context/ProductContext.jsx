import React, { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [count, setCount] = useState(0);
	const [isCartEmpty, setIsCartEmpty] = useState(true);
	const [showLightbox, setShowLightbox] = useState(false);

	const toggleCart = () => setShowCart(!showCart);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));

	const fillCart = () => count > 0 && setIsCartEmpty(false);

	return (
		<ProductContext.Provider
			value={{
				showMobileNav,
				setShowMobileNav,
				showCart,
				setShowCart,
				toggleCart,
				count,
				increment,
				decrement,
				isCartEmpty,
				setIsCartEmpty,
				fillCart,
				showLightbox,
				setShowLightbox,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductProvider;
