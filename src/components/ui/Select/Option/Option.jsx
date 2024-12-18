import React from "react";
import styles from "./Option.module.scss";

const Option = ({ children, onClick }) => {
	return (
		<div
			onClick={() => onClick()}
			className={[styles.option, "option p-3"].join(" ")}
		>
			{children}
		</div>
	);
};

export default Option;
