import React from "react";

import "./main.scss";

import ProductGallery from "./components/ProductGallery";
import ProductContent from "./components/ProductContent";

function index() {
	return (
		<main>
			<div className="product-wrapper">
				<ProductGallery />
				<ProductContent />
			</div>
		</main>
	);
}

export default index;
