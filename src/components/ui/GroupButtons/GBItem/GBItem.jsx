import React from "react";
import styles from "./GBItem.module.scss";

const GBItem = ({ data, children, onClick }) => {
	return (
		<div
			onClick={() => onClick(data)}
			className={[styles.gbItem, data.checked ? styles.active : ""].join(
				" "
			)}
		>
			{children}
		</div>
	);
};

export default GBItem;
