import { createSlice } from "@reduxjs/toolkit";
import IMAGES from "../../images/images.js";
import { componentsFactory } from "../../helpers/componentsFactory.js";

const initialComponents = {
	motherboards: [
		{
			id: 1,
			name: "MSI B550M PRO-VDH",
			image: IMAGES.motherboards.lvl1,
			supporting_components: [
				// ID-s CPU
				10, 11,
			],
			characteristics: [
				{
					name: "RAM Slots",
					value: 2,
					label: "",
				},
				{
					name: "SSD Slots",
					value: 1,
					label: "",
				},
				{
					name: "Cons. of electr.",
					value: 15.33,
					label: "kW/m",
				},
			],
		},
		{
			id: 2,
			name: "MSI MAG B550 Tomahawk",
			image: IMAGES.motherboards.lvl2,
			characteristics: [
				{
					name: "RAM Slots",
					value: 2,
				},
				{
					name: "SSD Slots",
					value: 1,
				},
				{
					name: "Cons. of electr.",
					value: 16.79,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s CPU
				11, 12,
			],
		},
		{
			id: 3,
			name: "ASUS ROG Strix Z790-F Gaming",
			image: IMAGES.motherboards.lvl3,
			characteristics: [
				{
					name: "RAM Slots",
					value: 4,
				},
				{
					name: "SSD Slots",
					value: 2,
				},
				{
					name: "Cons. of electr.",
					value: 18.25,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s CPU
				11, 12, 13,
			],
		},
		{
			id: 4,
			name: "ASUS TUF Gaming B550M-PLUS",
			image: IMAGES.motherboards.lvl4,
			characteristics: [
				{
					name: "RAM Slots",
					value: 4,
				},
				{
					name: "SSD Slots",
					value: 2,
				},
				{
					name: "Cons. of electr.",
					value: 20.44,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s CPU
				12, 13,
			],
		},
		{
			id: 5,
			name: "ASUS ROG Strix B760-A Gaming",
			image: IMAGES.motherboards.lvl5,
			characteristics: [
				{
					name: "RAM Slots",
					value: 4,
				},
				{
					name: "SSD Slots",
					value: 4,
				},
				{
					name: "Cons. of electr.",
					value: 20.44,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s CPU
				14,
			],
		},
		{
			id: 6,
			name: "ASUS ROG HYPER-X",
			image: IMAGES.motherboards.lvl6,
			characteristics: [
				{
					name: "RAM Slots",
					value: 4,
				},
				{
					name: "SSD Slots",
					value: 4,
				},
				{
					name: "Cons. of electr.",
					value: 22.63,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s CPU
				14, 15,
			],
		},
		{
			id: 7,
			name: "ASUS ROG X1500 Fusion",
			image: IMAGES.motherboards.lvl7,
			characteristics: [
				{
					name: "RAM Slots",
					value: 4,
				},
				{
					name: "SSD Slots",
					value: 8,
				},
				{
					name: "Cons. of electr.",
					value: 25.55,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s CPU
				16,
			],
		},
	],
	CPUs: [
		{
			id: 10,
			name: "Intel Pentium G6960",
			image: IMAGES.CPUs.lvl1,
			characteristics: [
				{
					name: "Cores",
					value: 2,
				},
				{
					name: "Frequency",
					value: "2.8 GHz",
				},
				{
					name: "Cons. of electr.",
					value: 7.3,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				1,
			],
		},
		{
			id: 11,
			name: "Intel CORE i3",
			image: IMAGES.CPUs.lvl2,

			characteristics: [
				{
					name: "Cores",
					value: 4,
				},
				{
					name: "Frequency",
					value: "3.1 GHz",
				},
				{
					name: "Cons. of electr.",
					value: 8.03,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				1, 2, 3,
			],
		},
		{
			id: 12,
			name: "Intel CORE i5",
			image: IMAGES.CPUs.lvl3,

			characteristics: [
				{
					name: "Cores",
					value: 6,
				},
				{
					name: "Frequency",
					value: "3.6 GHz",
				},
				{
					name: "Cons. of electr.",
					value: 10.22,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				3, 4,
			],
		},
		{
			id: 13,
			name: "Intel CORE i7",
			image: IMAGES.CPUs.lvl4,

			characteristics: [
				{
					name: "Cores",
					value: 8,
				},
				{
					name: "Frequency",
					value: "3.9 GHz",
				},
				{
					name: "Cons. of electr.",
					value: 10.95,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				3, 4, 5,
			],
		},
		{
			id: 14,
			name: "Intel CORE i9-9900K",
			image: IMAGES.CPUs.lvl5,
			characteristics: [
				{
					name: "Cores",
					value: 12,
				},
				{
					name: "Frequency",
					value: "4.4 GHz",
				},
				{
					name: "Cons. of electr.",
					value: 10.95,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				5,
			],
		},
		{
			id: 15,
			name: "Intel CORE i9-9900K ULTRA",
			image: IMAGES.CPUs.lvl6,
			characteristics: [
				{
					name: "Cores",
					value: 12,
				},
				{
					name: "Frequency",
					value: "4.9 GHz",
				},
				{
					name: "Cons. of electr.",
					value: 10.22,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				5, 6,
			],
		},
		{
			id: 16,
			name: "Intel CORE i9-10500K ULTRA",
			image: IMAGES.CPUs.lvl7,
			characteristics: [
				{
					name: "Cores",
					value: 16,
				},
				{
					name: "Frequency",
					value: "6.8 GHz",
				},
				{
					name: "Cons. of electr.",
					value: 9.49,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				7,
			],
		},
	],
	CPUsFANs: [
		{
			id: 200,
			name: "Arctic X10",
			image: IMAGES.CPUsFANs.lvl1,

			characteristics: [
				{
					name: "Temperature drop",
					value: "11 °C",
				},
				{
					name: "Cons. of electr.",
					value: 1.095,
					label: "kW/m",
				},
			],
		},
		{
			id: 201,
			name: "Arctic XL",
			image: IMAGES.CPUsFANs.lvl2,

			characteristics: [
				{
					name: "Temperature drop",
					value: "23 °C",
				},
				{
					name: "Cons. of electr.",
					value: 1.46,
					label: "kW/m",
				},
			],
		},
		{
			id: 202,
			name: "Arctic V2",
			image: IMAGES.CPUsFANs.lvl3,

			characteristics: [
				{
					name: "Temperature drop",
					value: "31 °C",
				},
				{
					name: "Cons. of electr.",
					value: 1.533,
					label: "kW/m",
				},
			],
		},
		{
			id: 203,
			name: "Arctic FROZEN",
			image: IMAGES.CPUsFANs.lvl4,

			characteristics: [
				{
					name: "Temperature drop",
					value: "44 °C",
				},
				{
					name: "Cons. of electr.",
					value: 1.752,
					label: "kW/m",
				},
			],
		},
		{
			id: 204,
			name: "Arctic FNX",
			image: IMAGES.CPUsFANs.lvl5,

			characteristics: [
				{
					name: "Temperature drop",
					value: "52 °C",
				},
				{
					name: "Cons. of electr.",
					value: 2.19,
					label: "kW/m",
				},
			],
		},
		{
			id: 205,
			name: "Arctic KING SNOW",
			image: IMAGES.CPUsFANs.lvl6,

			characteristics: [
				{
					name: "Temperature drop",
					value: "65 °C",
				},
				{
					name: "Cons. of electr.",
					value: 2.555,
					label: "kW/m",
				},
			],
		},
		{
			id: 206,
			name: "Arctic MONSTER",
			image: IMAGES.CPUsFANs.lvl7,

			characteristics: [
				{
					name: "Temperature drop",
					value: "71 °C",
				},
				{
					name: "Cons. of electr.",
					value: 2.92,
					label: "kW/m",
				},
			],
		},
	],
	RAMs: [
		{
			id: 100,
			name: "Kingston 2GB",
			image: IMAGES.RAMs.lvl1,

			characteristics: [
				{
					name: "GB",
					value: 2,
				},
				{
					name: "Frequency",
					value: "860 MHz",
				},
				{
					name: "Cons. of electr.",
					value: 2.263,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				1,
			],
		},
		{
			id: 101,
			name: "Kingston 4GB",
			image: IMAGES.RAMs.lvl2,

			characteristics: [
				{
					name: "GB",
					value: 4,
				},
				{
					name: "Frequency",
					value: "1366 MHz",
				},
				{
					name: "Cons. of electr.",
					value: 2.336,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				1, 2,
			],
		},
		{
			id: 102,
			name: "Kingston FUSION 4GB",
			image: IMAGES.RAMs.lvl3,

			characteristics: [
				{
					name: "GB",
					value: 8,
				},
				{
					name: "Frequency",
					value: "2400 MHz",
				},
				{
					name: "Cons. of electr.",
					value: 2.482,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				2,
			],
		},
		{
			id: 103,
			name: "Kingston ADRENALIN 8GB",
			image: IMAGES.RAMs.lvl4,

			characteristics: [
				{
					name: "GB",
					value: 16,
				},
				{
					name: "Frequency",
					value: "3200 MHz",
				},
				{
					name: "Cons. of electr.",
					value: 2.774,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				3, 4, 5,
			],
		},
		{
			id: 104,
			name: "Kingston EXTRIME 16GB",
			image: IMAGES.RAMs.lvl5,

			characteristics: [
				{
					name: "GB",
					value: 32,
				},
				{
					name: "Frequency",
					value: "4800 MHz",
				},
				{
					name: "Cons. of electr.",
					value: 2.847,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				5,
			],
		},
		{
			id: 105,
			name: "Kingston EXTRIME 16GB",
			image: IMAGES.RAMs.lvl6,

			characteristics: [
				{
					name: "GB",
					value: 64,
				},
				{
					name: "Frequency",
					value: "5200 MHz",
				},
				{
					name: "Cons. of electr.",
					value: 2.92,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				5, 6,
			],
		},
		{
			id: 106,
			name: "Kingston EXTRIME 16GB",
			image: IMAGES.RAMs.lvl7,

			characteristics: [
				{
					name: "GB",
					value: 128,
				},
				{
					name: "Frequency",
					value: "6400 MHz",
				},
				{
					name: "Cons. of electr.",
					value: 2.92,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				7,
			],
		},
	],
	GPUs: [
		{
			id: 1000,
			name: "GeForce 8400M GT",
			image: IMAGES.GPUs.lvl1,

			characteristics: [
				{
					name: "GB",
					value: 2,
				},
				{
					name: "Bit",
					value: 64,
				},
				{
					name: "Mh/h",
					value: 18,
				},
				{
					name: "W",
					value: 45,
				},
				{
					name: "Cons. of electr.",
					value: 32.85,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				1, 2,
			],
		},
		{
			id: 1001,
			name: "GeForce GT 320",
			image: IMAGES.GPUs.lvl2,

			characteristics: [
				{
					name: "GB",
					value: 4,
				},
				{
					name: "Bit",
					value: 128,
				},
				{
					name: "Mh/h",
					value: 36,
				},
				{
					name: "W",
					value: 75,
				},
				{
					name: "Cons. of electr.",
					value: 54.75,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				2, 3,
			],
		},
		{
			id: 1002,
			name: "GeForce GTX 860M",
			image: IMAGES.GPUs.lvl3,

			characteristics: [
				{
					name: "GB",
					value: 8,
				},
				{
					name: "Bit",
					value: 128,
				},
				{
					name: "Mh/h",
					value: 58,
				},
				{
					name: "W",
					value: 112,
				},
				{
					name: "Cons. of electr.",
					value: 81.76,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				3, 4,
			],
		},
		{
			id: 1003,
			name: "GeForce RTX 2160",
			image: IMAGES.GPUs.lvl4,

			characteristics: [
				{
					name: "GB",
					value: 12,
				},
				{
					name: "Bit",
					value: 256,
				},
				{
					name: "Mh/h",
					value: 83,
				},
				{
					name: "W",
					value: 135,
				},
				{
					name: "Cons. of electr.",
					value: 98.55,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				4, 5,
			],
		},
		{
			id: 1004,
			name: "GeForce RT_IKS 4060",
			image: IMAGES.GPUs.lvl5,

			characteristics: [
				{
					name: "GB",
					value: 12,
				},
				{
					name: "Bit",
					value: 512,
				},
				{
					name: "Mh/h",
					value: 105,
				},
				{
					name: "W",
					value: 164,
				},
				{
					name: "Cons. of electr.",
					value: 119.72,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				4, 5,
			],
		},
		{
			id: 1005,
			name: "GeForce 5040-TX",
			image: IMAGES.GPUs.lvl6,

			characteristics: [
				{
					name: "GB",
					value: 12,
				},
				{
					name: "Bit",
					value: 1024,
				},
				{
					name: "Mh/h",
					value: 160,
				},
				{
					name: "W",
					value: 201,
				},
				{
					name: "Cons. of electr.",
					value: 146.73,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				4, 5,
			],
		},
		{
			id: 1006,
			name: "GeForce 6600RX",
			image: IMAGES.GPUs.lvl7,

			characteristics: [
				{
					name: "GB",
					value: 16,
				},
				{
					name: "Bit",
					value: 1024,
				},
				{
					name: "Mh/h",
					value: 210,
				},
				{
					name: "W",
					value: 310,
				},
				{
					name: "Cons. of electr.",
					value: 226.3,
					label: "kW/m",
				},
			],
			supporting_components: [
				// ID-s motherboard-s
				4, 5,
			],
		},
	],
	SSDs: [
		{
			id: 300,
			name: "Kingston 64GB",
			image: IMAGES.SSDs.lvl1,

			characteristics: [
				{
					name: "GB",
					value: 64,
				},
				{
					name: "Cons. of electr.",
					value: 1.46,
					label: "kW/m",
				},
			],
		},
		{
			id: 301,
			name: "Kingston 128GB",
			image: IMAGES.SSDs.lvl2,

			characteristics: [
				{
					name: "GB",
					value: 128,
				},
				{
					name: "Cons. of electr.",
					value: 1.46,
					label: "kW/m",
				},
			],
		},
		{
			id: 302,
			name: "Kingston 256GB",
			image: IMAGES.SSDs.lvl3,

			characteristics: [
				{
					name: "GB",
					value: 256,
				},
				{
					name: "Cons. of electr.",
					value: 1.679,
					label: "kW/m",
				},
			],
		},
		{
			id: 303,
			name: "Kingston 512GB",
			image: IMAGES.SSDs.lvl4,

			characteristics: [
				{
					name: "GB",
					value: 512,
				},
				{
					name: "Cons. of electr.",
					value: 1.898,
					label: "kW/m",
				},
			],
		},
		{
			id: 304,
			name: "Kingston 1TB",
			image: IMAGES.SSDs.lvl5,

			characteristics: [
				{
					name: "GB",
					value: "1TB",
				},
				{
					name: "Cons. of electr.",
					value: 2.19,
					label: "kW/m",
				},
			],
		},
		{
			id: 305,
			name: "Kingston 1TB",
			image: IMAGES.SSDs.lvl6,

			characteristics: [
				{
					name: "GB",
					value: "2TB",
				},
				{
					name: "Cons. of electr.",
					value: 2.484,
					label: "kW/m",
				},
			],
		},
		{
			id: 306,
			name: "Kingston 1TB",
			image: IMAGES.SSDs.lvl7,

			characteristics: [
				{
					name: "GB",
					value: "8TB",
				},
				{
					name: "Cons. of electr.",
					value: 3.65,
					label: "kW/m",
				},
			],
		},
	],
	PowerSupply: [
		{
			id: 400,
			name: "Gigabyte 400X",
			image: IMAGES.PowerSupply.lvl1,

			characteristics: [
				{
					name: "W",
					value: 200,
				},
				{
					name: "Cons. of electr.",
					value: 182.5,
					label: "kW/m",
				},
			],
		},
		{
			id: 401,
			name: "Gigabyte 800X",
			image: IMAGES.PowerSupply.lvl2,

			characteristics: [
				{
					name: "W",
					value: 350,
				},
				{
					name: "Cons. of electr.",
					value: 255.5,
					label: "kW/m",
				},
			],
		},
		{
			id: 402,
			name: "Gigabyte 1400X",
			image: IMAGES.PowerSupply.lvl3,

			characteristics: [
				{
					name: "W",
					value: 500,
				},
				{
					name: "Cons. of electr.",
					value: 365,
					label: "kW/m",
				},
			],
		},
		{
			id: 403,
			name: "Gigabyte 1800X",
			image: IMAGES.PowerSupply.lvl4,

			characteristics: [
				{
					name: "W",
					value: 750,
				},
				{
					name: "Cons. of electr.",
					value: 547.5,
					label: "kW/m",
				},
			],
		},
		{
			id: 404,
			name: "Gigabyte 2400X",
			image: IMAGES.PowerSupply.lvl5,

			characteristics: [
				{
					name: "W",
					value: 1400,
				},
				{
					name: "Cons. of electr.",
					value: 1022,
					label: "kW/m",
				},
			],
		},
		{
			id: 405,
			name: "Gigabyte 2400X",
			image: IMAGES.PowerSupply.lvl6,

			characteristics: [
				{
					name: "W",
					value: 1850,
				},
				{
					name: "Cons. of electr.",
					value: 1350.5,
					label: "kW/m",
				},
			],
		},
		{
			id: 406,
			name: "Gigabyte 2400X",
			image: IMAGES.PowerSupply.lvl7,

			characteristics: [
				{
					name: "W",
					value: 2650,
				},
				{
					name: "Cons. of electr.",
					value: 1934.5,
					label: "kW/m",
				},
			],
		},
	],
	RIGs: [
		{
			id: 500,
			name: "RIG x5",
			image: IMAGES.RIGs.lvl1,

			characteristics: [
				{
					name: "Slots GPU",
					value: 2,
				},
				{
					name: "Slots supply",
					value: 1,
				},
				{
					name: "Temperature drop",
					value: 5,
					label: "°C",
				},
			],
		},
		{
			id: 501,
			name: "RIG RX-8",
			image: IMAGES.RIGs.lvl2,

			characteristics: [
				{
					name: "Slots GPU",
					value: 4,
				},
				{
					name: "Slots supply",
					value: 1,
				},
				{
					name: "Temperature drop",
					value: 10,
					label: "°C",
				},
			],
		},
		{
			id: 502,
			name: "Storm 10",
			image: IMAGES.RIGs.lvl3,

			characteristics: [
				{
					name: "Slots GPU",
					value: 8,
				},
				{
					name: "Slots supply",
					value: 2,
				},
				{
					name: "Temperature drop",
					value: 25,
					label: "°C",
				},
			],
		},
		{
			id: 503,
			name: "HUB EXTRIME",
			image: IMAGES.RIGs.lvl4,

			characteristics: [
				{
					name: "Slots GPU",
					value: 12,
				},
				{
					name: "Slots supply",
					value: 2,
				},
				{
					name: "Temperature drop",
					value: 35,
					label: "°C",
				},
			],
		},
		{
			id: 504,
			name: "CRYPTO MONSTER",
			image: IMAGES.RIGs.lvl5,

			characteristics: [
				{
					name: "Slots GPU",
					value: 24,
				},
				{
					name: "Slots supply",
					value: 3,
				},
				{
					name: "Temperature drop",
					value: 50,
					label: "°C",
				},
			],
		},
		{
			id: 505,
			name: "MINER 2600",
			image: IMAGES.RIGs.lvl6,

			characteristics: [
				{
					name: "Slots GPU",
					value: 24,
				},
				{
					name: "Slots supply",
					value: 3,
				},
				{
					name: "Temperature drop",
					value: 65,
					label: "°C",
				},
			],
		},
		{
			id: 506,
			name: "MINER 5100",
			image: IMAGES.RIGs.lvl7,

			characteristics: [
				{
					name: "Slots GPU",
					value: 32,
				},
				{
					name: "Slots supply",
					value: 4,
				},
				{
					name: "Temperature drop",
					value: 90,
					label: "°C",
				},
			],
		},
	],
};

const mergedComponents = (components) => {
	let arrayComponents = [];

	for (const key in components) {
		if (Object.hasOwnProperty.call(components, key)) {
			arrayComponents = [...arrayComponents, ...components[key]];
		}
	}

	return arrayComponents;
};

const stationComponents = createSlice({
	name: "stationComponents",
	initialState: {
		components: componentsFactory(initialComponents),
		allComponents: mergedComponents(initialComponents),
	},
	reducers: {
		// setIncreasingStation(state, action) {
		// 	state.stations.find((station) => {
		// 		if (station.id === action.payload.id) {
		// 			station.increasing = action.payload.increasing;
		// 		}
		// 	});
		// },
	},
});

export const {} = stationComponents.actions;
export default stationComponents.reducer;
