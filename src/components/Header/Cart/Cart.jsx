import React, { useState, useContext } from "react";

import styles from "./styles.module.css";
import Button from "../../shared/Button/Button";

import productImg from "../../../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../../images/icon-delete.svg";

import CartContext from "../../../context/CartContext";

function Cart() {
	const { amountNumber, setShowProductCount, showCartContent, setShowCartContent, showCart } =
		useContext(CartContext);

	const deleteProduct = (e) => {
		e.target.parentNode.parentNode.style.display = "none";
		setShowCartContent(false);
		setShowProductCount(false);
	};

	return (
		<div className={showCart ? styles.displayBlock : styles.displayNone}>
			{showCartContent && (
				<div className={styles.cartContainer}>
					<h4>Cart</h4>
					<div className={styles.cardBody}>
						<div className={styles.productWrapper}>
							<img src={productImg} className={styles.productImg} />
							<div className={styles.productInfo}>
								<h5>Fall Limited Edition Sneakers</h5>
								<div className={styles.prdouctPrice}>
									<span>$125.00</span>
									<span>x {amountNumber}</span>
									<span className={styles.realCost}>${125 * amountNumber}.00</span>
								</div>
							</div>
							<img src={deleteIcon} onClick={(e) => deleteProduct(e)} />
						</div>

						<Button>Checkout</Button>
					</div>
				</div>
			)}

			{!showCartContent && (
				<div className={styles.cartContainer}>
					<h4>Cart</h4>
					<div className={styles.cardBody}>
						<h5>Your cart is empty.</h5>
					</div>
				</div>
			)}
		</div>
	);
}

export default Cart;
