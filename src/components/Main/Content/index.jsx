import React from "react";
import styles from "./styles.module.css";

import ProductInfo from "./ProductInfo/index";
import Purchase from "./Purchase/index";

function Content() {
	return (
		<div className="container">
			<div className={styles.contentWrapper}>
				<ProductInfo />
				<Purchase />
			</div>
		</div>
	);
}

export default Content;
