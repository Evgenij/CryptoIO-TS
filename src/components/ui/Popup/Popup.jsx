import React from "react";
import styles from "./Popup.module.scss";
import Button from "../Button/Button";

const Popup = ({ visible, children, onClose }) => {
	return (
		visible && (
			<div
				className={[
					styles.popup,
					"absolute flex flex-col space-y-5 mt-3 bg-panel z-50 p-3",
				].join(" ")}
			>
				{children}
				<footer className="flex justify-between space-x-2">
					<Button color="gray" onClick={() => onClose(false)}>
						Cancel
					</Button>
					<Button color="green" onClick={() => onClose(true)}>
						Apply
					</Button>
				</footer>
			</div>
		)
	);
};

export default Popup;
