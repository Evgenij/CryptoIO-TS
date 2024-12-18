import React, { useEffect, useState } from "react";
import Option from "./Option/Option";
import styles from "./Select.module.scss";

const Select = ({ options, onChange }) => {
	const [isOpenList, setIsOpenList] = useState(true);
	const [currentValue, setCurrentValue] = useState(options[0].value);
	const [label, setLabel] = useState(options[0].label);

	const handlerChangeValue = (value) => {
		// console.log(value);
		setCurrentValue(value);
		// setIsOpenList(!isOpenList);
	};

	useEffect(() => {
		console.log("!!!");
		setIsOpenList((prev) => !prev);

		const label = options.find(
			(option) => option.value === currentValue
		).label;
		setLabel(label);
		onChange(currentValue);
	}, [currentValue]);

	return (
		<div className="relative w-fit h-fit">
			{/* <div className={[styles.select, ""].join(" ")}>Data</div> */}
			<input
				className="opacity-0 absolute"
				type="checkbox"
				name="controller"
				id="controller"
				onChange={() => setIsOpenList((prev) => !prev)}
			/>
			<label
				htmlFor="controller"
				className={[styles.select, "cursor-pointer h-fit"].join(" ")}
			>
				{label}
			</label>

			<div
				className={[
					styles.optionsList,
					isOpenList ? "block" : "hidden",
				].join(" ")}
			>
				{options &&
					options.map((option) => (
						<Option
							onClick={() => handlerChangeValue(option.value)}
							key={option.id}
						>
							{option.label}
						</Option>
					))}
			</div>
		</div>
	);
};

export default Select;
