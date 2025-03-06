import React, { useRef } from "react";

import productImage1 from "../../../../images/image-product-1.jpg";
import productImage2 from "../../../../images/image-product-2.jpg";
import productImage3 from "../../../../images/image-product-3.jpg";
import productImage4 from "../../../../images/image-product-4.jpg";

import arrowNext from "../../../../images/icon-next.svg";
import arrowPrev from "../../../../images/icon-previous.svg";

function MobileGallery() {
	const imagesArray = [productImage1, productImage2, productImage3, productImage4];

	const galleryRef = useRef();

	let idx = 0;

	const changeImage = () => {
		if (idx > imagesArray.length - 1) {
			idx = 0;
		} else if (idx < 0) {
			idx = imagesArray.length - 1;
		}

		galleryRef.current.style.transform = `translateX(${-idx * 375}px)`;
	};

	const handlePrevImage = () => {
		idx--;
		changeImage();
	};

	const handleNextImage = () => {
		idx++;
		changeImage();
	};

	return (
		<div className="mobile-gallery">
			<div className="img-container" ref={galleryRef}>
				{imagesArray.map((image, index) => (
					<img src={image} key={index} />
				))}
			</div>

			<img src={arrowPrev} className="arrow-prev" onClick={handlePrevImage} />
			<img src={arrowNext} className="arrow-next" onClick={handleNextImage} />
		</div>
	);
}

export default MobileGallery;
