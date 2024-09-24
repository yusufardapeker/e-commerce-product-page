import React from "react";

import "./productGallery.scss";

import MobileGallery from "./MobileGallery";
import DesktopGallery from "./DesktopGallery";
import LigthboxGallery from "./LigthboxGallery";

function index() {
	return (
		<div>
			<MobileGallery />
			<DesktopGallery />
			<LigthboxGallery />
		</div>
	);
}

export default index;
