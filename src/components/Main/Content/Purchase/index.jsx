import React from "react";
import styles from "./styles.module.css";

import minusIcon from "../../../../images/icon-minus.svg";
import plusIcon from "../../../../images/icon-plus.svg";
import CardIcon from "../../../shared/CartIcon/CardIcon";

function Purchase() {
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
				<img src={minusIcon} />
				<span className={styles.amountNumber}>0</span>
				<img src={plusIcon} />
			</div>
			<div className={styles.addButton}>
				<CardIcon color="#1d2025" />
				Add to cart
			</div>
		</div>
	);
}

export default Purchase;
