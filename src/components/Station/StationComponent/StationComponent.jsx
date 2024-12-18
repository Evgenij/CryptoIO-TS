import React, { useState } from "react";
import styles from "./StationComponent.module.scss";

const StationComponent = ({ name, characteristic = [] }) => {
	const [characteristics, setCharacteristics] = useState(characteristics);

	return <div className={[styles.stationComponent].join(" ")}>{name}</div>;
};

export default StationComponent;
