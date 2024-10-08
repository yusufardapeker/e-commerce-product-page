import React, { useContext, useState } from "react";

import productImage1 from "../../../../images/image-product-1.jpg";
import productThumbnail1 from "../../../../images/image-product-1-thumbnail.jpg";

import productImage2 from "../../../../images/image-product-2.jpg";
import productThumbnail2 from "../../../../images/image-product-2-thumbnail.jpg";

import productImage3 from "../../../../images/image-product-3.jpg";
import productThumbnail3 from "../../../../images/image-product-3-thumbnail.jpg";

import productImage4 from "../../../../images/image-product-4.jpg";
import productThumbnail4 from "../../../../images/image-product-4-thumbnail.jpg";

import { ProductContext } from "../../../../context/ProductContext";

function DesktopGallery() {
	const { setShowLightbox } = useContext(ProductContext);
	const [currentImg, setCurrentImg] = useState(productImage1);

	const productThumbnailArray = [
		productThumbnail1,
		productThumbnail2,
		productThumbnail3,
		productThumbnail4,
	];

	const handleThumbnailChange = (e) => {
		setCurrentImg(e.target.attributes[1].value);

		const thumbnailImages = document.querySelectorAll(".thumbnail-img");

		thumbnailImages.forEach((image) => {
			image.classList.remove("active");
		});

		e.target.classList.add("active");
	};

	return (
		<div className="desktop-gallery">
			<div className="currentImg">
				<img src={currentImg} onClick={() => setShowLightbox(true)} />
			</div>
			<div className="thumbnail-wrapper" onClick={(e) => handleThumbnailChange(e)}>
				<img src={productThumbnail1} full-image={productImage1} className="thumbnail-img" />
				<img src={productThumbnail2} full-image={productImage2} className="thumbnail-img" />
				<img src={productThumbnail3} full-image={productImage3} className="thumbnail-img" />
				<img src={productThumbnail4} full-image={productImage4} className="thumbnail-img" />
			</div>
		</div>
	);
}

export default DesktopGallery;
