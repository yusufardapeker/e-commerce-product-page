import { React, useRef } from "react";
import styles from "./styles.module.css";

import { Images } from "./images";

import nextIcon from "../../../../images/icon-next.svg";
import prevIcon from "../../../../images/icon-previous.svg";

function ShowcaseMobile() {
	const wrapperElement = useRef();

	let multiply = 0;

	const changeImage = () => {
		if (multiply === Images.length) {
			multiply = 0;
		} else if (multiply < 0) {
			multiply = 3;
		}

		wrapperElement.current.style.transform = `translateX(${-375 * multiply}px)`;
	};

	const handlePrev = () => {
		multiply--;
		changeImage();
	};

	const handleNext = () => {
		multiply++;
		changeImage();
	};

	return (
		<>
			<div className={styles.showcaseWrapper} ref={wrapperElement}>
				{Images.map((image, index) => {
					return <img src={image} key={index} />;
				})}
			</div>

			<img src={prevIcon} className={styles.prevIcon} onClick={handlePrev} />
			<img src={nextIcon} className={styles.nextIcon} onClick={handleNext} />
		</>
	);
}

export default ShowcaseMobile;
