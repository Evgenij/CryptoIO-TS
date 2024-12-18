import React, { useState } from "react";
import StationComponent from "./StationComponent/StationComponent";
import Button from "../ui/Button/Button";
import { Link } from "react-router-dom";
import { EDIT_STATION_ROUTE } from "../../constants/routes";

const Station = ({ text }) => {
	return (
		<div className="station bg-panel">
			{text}{" "}
			<Link to={EDIT_STATION_ROUTE}>
				<Button color="gray"> 🪛 Edit station</Button>
			</Link>{" "}
		</div>
	);
};

export default Station;
