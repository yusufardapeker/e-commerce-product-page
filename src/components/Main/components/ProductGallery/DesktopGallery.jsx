import React, { useState } from "react";

import productImage1 from "../../../../images/image-product-1.jpg";
import productThumbnail1 from "../../../../images/image-product-1-thumbnail.jpg";

import productImage2 from "../../../../images/image-product-2.jpg";
import productThumbnail2 from "../../../../images/image-product-2-thumbnail.jpg";

import productImage3 from "../../../../images/image-product-3.jpg";
import productThumbnail3 from "../../../../images/image-product-3-thumbnail.jpg";

import productImage4 from "../../../../images/image-product-4.jpg";
import productThumbnail4 from "../../../../images/image-product-4-thumbnail.jpg";

function DesktopGallery() {
	const [currentImg, setCurrentImg] = useState(productImage1);

	return (
		<div className="desktop-gallery">
			<div className="currentImg">
				<img src={currentImg} />
			</div>
			<div
				className="thumbnail-wrapper"
				onClick={(e) => setCurrentImg(e.target.attributes[1].value)}
			>
				<img src={productThumbnail1} full-image={productImage1} />
				<img src={productThumbnail2} full-image={productImage2} />
				<img src={productThumbnail3} full-image={productImage3} />
				<img src={productThumbnail4} full-image={productImage4} />
			</div>
		</div>
	);
}

export default DesktopGallery;
