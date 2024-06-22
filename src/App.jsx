import { useState } from "react";
import "./styles/reset.css";
import "./styles/global.css";

import Header from "./components/Header/index";
import Main from "./components/Main/index";

import CartContext from "./context/CartContext";

function App() {
	const [amountNumber, setAmountNumber] = useState(0);
	const [showProductCount, setShowProductCount] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [showCartContent, setShowCartContent] = useState(false);

	const data = {
		amountNumber,
		setAmountNumber,
		showProductCount,
		setShowProductCount,
		showCart,
		setShowCart,
		showCartContent,
		setShowCartContent,
	};

	return (
		<>
			<CartContext.Provider value={data}>
				<Header />
				<Main />
			</CartContext.Provider>
		</>
	);
}

export default App;
