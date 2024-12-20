import IMAGES from "../images/images";
import { IMotherboard } from "../types";

const Motherboards: IMotherboard[] = [
	{
		initialID: 1,
		manufacturer: "Gigabate",
		model: "B320-M",
		image: IMAGES.Motherboards.lvl1,
		characteristics: [
			{
				name: "RAM Slots",
				value: 1,
				label: "",
			},
			{
				name: "SSD Slots",
				value: 1,
				label: "",
			},
			{
				name: "Max size RAM",
				value: 8,
				label: "",
			},
			{
				name: "Cons. of electr.",
				value: 15.33,
				label: "kW/m",
			},
		],
		supporting_components: [10, 11], // CPUs ID
		W: 21,
		electricConsumption: 15.33,
		maxSizeRAM: 8,
		slots: {
			RAM: 1,
			SSD: 1,
		},
	},
];
