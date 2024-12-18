import React, { useState } from "react";
import styles from "./GroupButtons.module.scss";
import GBItem from "./GBItem/GBItem";

const GroupButtons = ({ buttons, onChange }) => {
	const [items, setItems] = useState(buttons);

	const setActiveItem = (data) => {
		const newItems = items.map((item) => {
			if (item.id === data.id) {
				return { ...item, checked: true };
			} else {
				return { ...item, checked: false };
			}
		});

		setItems(newItems);
		onChange(data.value);
	};

	return (
		<div className={[styles.groupButtons, "flex"].join(" ")}>
			{items &&
				items.map((item) => (
					<GBItem
						key={item.id}
						onClick={(data) => setActiveItem(data)}
						data={item}
					>
						{item.label}
					</GBItem>
				))}
		</div>
	);
};

export default GroupButtons;
