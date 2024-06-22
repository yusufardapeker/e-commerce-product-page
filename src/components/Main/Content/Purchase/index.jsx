import React, { useState, useContext } from "react";
import styles from "./styles.module.css";

import minusIcon from "../../../../images/icon-minus.svg";
import plusIcon from "../../../../images/icon-plus.svg";
import CardIcon from "../../../shared/CartIcon/CardIcon";

import Button from "../../../shared/Button/Button";

import CartContext from "../../../../context/CartContext";

function Purchase() {
	const { amountNumber, setAmountNumber, setShowProductCount, setShowCartContent } =
		useContext(CartContext);

	const decrease = () => {
		setAmountNumber(amountNumber - 1);

		if (amountNumber === 0) {
			setAmountNumber(0);
		}
	};

	const increase = () => {
		setAmountNumber(amountNumber + 1);
	};

	const addToCart = () => {
		if (amountNumber > 0) {
			setShowProductCount(true);
			setShowCartContent(true);
		}
	};

	return (
		<div className={styles.purchaseWrapper}>
			<div className={styles.priceWrapper}>
				<div className={styles.finalCostWrapper}>
					<span className={styles.finalCost}>$125.00</span>
					<span className={styles.discountRate}>50%</span>
				</div>
				<span className={styles.realPrice}>$250.00</span>
			</div>

			<div className={styles.purchaseAmount}>
				<img src={minusIcon} onClick={decrease} />
				<span className={styles.amountNumber}>{amountNumber}</span>
				<img src={plusIcon} onClick={increase} />
			</div>
			<Button className={styles.addButton} handleClick={addToCart}>
				<CardIcon color="#1d2025" />
				Add to cart
			</Button>
		</div>
	);
}

export default Purchase;
