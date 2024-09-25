import React from "react";

import "./productGallery.scss";

import MobileGallery from "./MobileGallery";
import DesktopGallery from "./DesktopGallery";
import LigthboxGallery from "./LigthboxGallery";

function index() {
	return (
		<div className="image-galleries-wrapper">
			<MobileGallery translateNumber={"375px"} translateUnit={"px"} />
			<DesktopGallery />
			<LigthboxGallery />
		</div>
	);
}

export default index;
