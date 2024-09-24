import React from "react";

import "./productGallery.scss";

import MobileGallery from "./MobileGallery";
import DesktopGallery from "./DesktopGallery";
import LigthboxGallery from "./LigthboxGallery";

function index() {
	return (
		<div className="image-galleries-wrapper">
			<MobileGallery />
			<DesktopGallery />
			<LigthboxGallery />
		</div>
	);
}

export default index;
