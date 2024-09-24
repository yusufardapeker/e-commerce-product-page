import React from "react";

import "./productContent.scss";

import InformationText from "./InformationText";
import AddToCart from "./AddToCart";

function index() {
	return (
		<div>
			<InformationText />
			<AddToCart />
		</div>
	);
}

export default index;
