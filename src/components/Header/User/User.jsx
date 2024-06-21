import React from "react";

import styles from "./styles.module.css";

import userAvatar from "../../../images/image-avatar.png";

function User() {
	return <img src={userAvatar} className={styles.userAvatarImg} />;
}

export default User;
