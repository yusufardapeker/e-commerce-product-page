import React, { useContext, useRef, useState } from "react";

import fullImage1 from "../../../../images/image-product-1.jpg";
import thumbnail1 from "../../../../images/image-product-1-thumbnail.jpg";

import fullImage2 from "../../../../images/image-product-2.jpg";
import thumbnail2 from "../../../../images/image-product-2-thumbnail.jpg";

import fullImage3 from "../../../../images/image-product-3.jpg";
import thumbnail3 from "../../../../images/image-product-3-thumbnail.jpg";

import fullImage4 from "../../../../images/image-product-4.jpg";
import thumbnail4 from "../../../../images/image-product-4-thumbnail.jpg";

import { ProductContext } from "../../../../context/ProductContext";

function DesktopGallery() {
	const { setShowLightbox } = useContext(ProductContext);
	const [currentFullImg, setCurrentFullImg] = useState(fullImage1);

	const thumbnailElements = useRef([]);

	const productImages = [
		{
			fullImg: fullImage1,
			thumbnail: thumbnail1,
		},
		{
			fullImg: fullImage2,
			thumbnail: thumbnail2,
		},
		{
			fullImg: fullImage3,
			thumbnail: thumbnail3,
		},
		{
			fullImg: fullImage4,
			thumbnail: thumbnail4,
		},
	];

	const handleThumbnailChange = (e) => {
		setCurrentFullImg(e.target.dataset.fullimg);

		thumbnailElements.current.forEach((image) => {
			image.classList.remove("active");
		});

		e.target.classList.add("active");
	};

	return (
		<div className="desktop-gallery">
			<div className="currentImg">
				<img src={currentFullImg} onClick={() => setShowLightbox(true)} />
			</div>
			<div className="thumbnail-wrapper" onClick={(e) => handleThumbnailChange(e)}>
				{productImages.map((product, index) => (
					<img
						src={product.thumbnail}
						className="thumbnail-img"
						key={index}
						ref={(el) => (thumbnailElements.current[index] = el)}
						data-fullimg={product.fullImg}
					/>
				))}
			</div>
		</div>
	);
}

export default DesktopGallery;
