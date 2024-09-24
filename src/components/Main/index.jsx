import React from "react";

import "./main.scss";

import ProductGallery from "./components/ProductGallery";
import ProductContent from "./components/ProductContent";

function index() {
	return (
		<main>
			<ProductGallery />
			<ProductContent />
		</main>
	);
}

export default index;
