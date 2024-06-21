import { React, useRef } from "react";
import styles from "./styles.module.css";

import { Images } from "./images";

import nextIcon from "../../../../images/icon-next.svg";
import prevIcon from "../../../../images/icon-previous.svg";

function ShowcaseMobile() {
	return (
		<>
			<div className={styles.showcaseWrapper}>
				{Images.map((image, index) => {
					return <img src={image} key={index} />;
				})}
			</div>

			<img src={prevIcon} className={styles.prevIcon} />
			<img src={nextIcon} className={styles.nextIcon} />
		</>
	);
}

export default ShowcaseMobile;
