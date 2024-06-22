import React from "react";

import styles from "./style.module.css";

function Button({ children, handleClick }) {
	return (
		<button className={styles.button} onClick={handleClick}>
			{children}
		</button>
	);
}

export default Button;
