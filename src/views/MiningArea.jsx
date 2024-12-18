import React from "react";
import Station from "../components/Station/Station";

const MiningArea = () => {
	const stations = [
		{
			text: "1",
		},
		{
			text: "2",
		},
		{
			text: "3",
		},
		{
			text: "4",
		},
		{
			text: "5",
		},
		{
			text: "6",
		},
	];

	return (
		<section className="mining-area grid gap-5 grid-cols-5 grid-rows-3 h-full">
			<div className="data-area row-span-3 bg-panel flex flex-col p-4">
				<h3>Data mining</h3>
			</div>
			{stations.map((station) => {
				return <Station key={station.text} text={station.text}></Station>;
			})}
		</section>
	);
};

export default MiningArea;
