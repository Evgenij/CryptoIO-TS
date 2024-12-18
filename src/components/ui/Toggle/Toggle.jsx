import React from "react";
import styles from "./Toggle.module.scss";

const Toggle = ({ id, children, onChange }) => {
	return (
		<div className={[styles.checkbox, ""].join(" ")}>
			<input
				type="checkbox"
				id={id}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<label htmlFor={id} className="w-full">
				{children}
			</label>
		</div>
	);
};

export default Toggle;
