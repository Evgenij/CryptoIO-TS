import styles from "./ComponentDisplay.module.scss";
import getColorOfLevel from "../../utils/getColorOfLevel.js";

const ComponentDisplay = ({ image }) => {
	const borderColor = image ? getColorOfLevel(image) : "";

	const hexToRGB = (hex, alpha) => {
		let r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);

		return alpha
			? "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
			: "rgb(" + r + ", " + g + ", " + b + ")";
	};

	console.log(image);

	return (
		<div
			style={{
				borderImage: `linear-gradient(145deg, ${borderColor} 0%, ${hexToRGB(
					borderColor,
					0.1
				)} 25%,${hexToRGB(
					borderColor,
					0.1
				)} 75%, ${borderColor} 100%) 1`,
			}}
			className={[
				styles.componentDisplay,
				"flex items-center justify-center",
			].join(" ")}
		>
			<div
				style={{
					background: `linear-gradient(145deg, ${hexToRGB(
						borderColor,
						0.15
					)} 0%, ${hexToRGB(borderColor, 0.05)} 30%, ${hexToRGB(
						borderColor,
						0.05
					)} 70%, ${hexToRGB(borderColor, 0.15)} 100%`,
				}}
				className={"flex w-full" + " items-center justify-center"}
			>
				<img
					className={"p-6 h-64 w-full object-contain"}
					src={image}
					alt={image}
				/>
			</div>
		</div>
	);
};

export default ComponentDisplay;
