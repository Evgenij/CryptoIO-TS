import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";
const soundPath = "../../sounds/click.mp3";

const Button = ({
	color,
	stylesTailwind = "",
	small,
	shadow,
	onClick,
	children,
	...rest
}) => {
	const classes = clsx({
		[styles.red]: color === "red",
		[styles.blue]: color === "blue",
		[styles.green]: color === "green",
		[styles.yellow]: color === "yellow",
		[styles.gray]: color === "gray",
		[styles.small]: small,
		[styles.shadow]: shadow,
		[stylesTailwind]: stylesTailwind.length !== 0, // for Tailwind CSS
	});

	const sound = new Audio(soundPath);
	//console.log(sound);

	const click = () => {
		sound.play();
		onClick();
	};

	return (
		<button
			{...rest}
			className={[styles.button, classes].join(" ")}
			onClick={() => click()}
		>
			{children ? children : "Button"}
		</button>
	);
};

export default Button;
