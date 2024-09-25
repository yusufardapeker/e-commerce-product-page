import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext";

import productThumbnail1 from "../../../images/image-product-1-thumbnail.jpg";

function Cart() {
	const { isCartEmpty, count, setShowCart } = useContext(ProductContext);

	useEffect(() => {
		const cartElement = document.querySelector(".cart");
		const cartIcon = document.querySelector(".cart-icon");

		document.addEventListener("click", (e) => {
			if (!e.composedPath().includes(cartElement) && !e.composedPath().includes(cartIcon)) {
				setShowCart(false);
			}
		});
	}, []);

	return (
		<div className="cart">
			<div className="cart-head">
				<h3>Cart</h3>
			</div>
			<div className="cart-body">
				{isCartEmpty && <p className="cart-empty-message">Your cart is empty.</p>}
				{!isCartEmpty && (
					<div className="cart-fill-wrapper">
						<div className="product-sale-content">
							<img className="product-thumbnail" src={productThumbnail1} />

							<div className="product-sale-information">
								<h4 className="product-title">Fall Limitied Edition Sneakers</h4>

								<div className="product-price">
									<span className="discounted-price">$125.00</span>
									<span className="multiply-by-count">x {count}</span>
									<span className="final-price">{`$${125 * count}.00`}</span>
								</div>
							</div>
						</div>

						<button className="btn">Checkout</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Cart;
