import React, { useState } from "react";
import styles from "./StationItem.module.scss";

const StationItem = ({ data }) => {
	const localStyles = {
		backgroundImage: `url(${data.image})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		backgroundPosition: "center",
		backgroundClip: "padding-box",
	};

	const [isActive, setIsActive] = useState(false);

	return (
		<div
			className={[
				styles.stationItem,
				isActive ? styles.active : "",
				"station-item p-3 h-full w-full bg-panel",
			].join(" ")}
			onClick={() => setIsActive(!isActive)}
		>
			<div
				style={localStyles}
				className={["h-full w-full "].join(" ")}
			></div>
		</div>
	);
};

export default StationItem;
