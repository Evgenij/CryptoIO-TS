import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ id, children, onChange }) => {
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

export default Checkbox;
