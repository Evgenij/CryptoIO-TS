import React, { useEffect, useState } from "react";
import styles from "./Counter.module.scss";
import Button from "../ui/Button/Button";

const Counter = ({ value, min, max, onChangeValue }) => {
	const [count, setCount] = useState(value);

	const increment = () => {
		if (max) {
			if (count < max) {
				setCount((prev) => prev + 1);
			}
		} else {
			setCount((prev) => prev + 1);
		}
	};
	const decrement = () => {
		if (count > 1) {
			setCount((prev) => prev - 1);
		}
	};

	useEffect(() => {
		onChangeValue(count);
	}, [count]);

	return (
		<div className={[styles.counter, "flex"].join(" ")}>
			<Button
				stylesTailwind={"text-base leading-0"}
				color="gray"
				small
				onClick={decrement}
				disabled={count == 1}
			>
				-
			</Button>
			<div className="bg-panel value flex items-center px-3">{count}</div>
			<Button
				color="gray"
				small
				onClick={increment}
				disabled={max && count == max}
			>
				+
			</Button>
		</div>
	);
};

export default Counter;
