import formattingNumber from "../utils/formattingNumber";

const secondsOfDay = 86400; // 1 day in seconds

const characteristicsCalc = {
	motherboards: {
		support: "CPUs",
		cost: { ratio: 1.8, initial: 70 },
		wear: { ratio: 1.3, initial: 4 * secondsOfDay },
	},
	CPUs: {
		support: "motherboards",
		cost: { ratio: 1.9, initial: 60 },
		wear: { ratio: 1.4, initial: 5 * secondsOfDay },
	},
	RAMs: {
		support: "motherboards",
		cost: { ratio: 1.65, initial: 25 },
		wear: { ratio: 1.3, initial: 4 * secondsOfDay },
	},
	GPUs: {
		support: "motherboards",
		cost: { ratio: 1.7, initial: 200 },
		wear: { ratio: 1.35, initial: 3 * secondsOfDay },
	},
	CPUsFANs: {
		support: "",
		cost: { ratio: 1.6, initial: 11 },
		wear: { ratio: 1.3, initial: 3 * secondsOfDay },
	},
	SSDs: {
		support: "",
		cost: { ratio: 1.6, initial: 35 },
		wear: { ratio: 1.3, initial: 5 * secondsOfDay },
	},
	PowerSupply: {
		support: "",
		cost: { ratio: 1.9, initial: 70 },
		wear: { ratio: 1.3, initial: 6 * secondsOfDay },
	},
	RIGs: {
		support: "",
		cost: { ratio: 1.7, initial: 60 },
		wear: { ratio: 1.3, initial: 10 * secondsOfDay },
	},
};

export const componentsFactory = (components) => {
	for (const key in components) {
		if (Object.hasOwnProperty.call(components, key)) {
			// motherboards
			//console.log(key, characteristicsCalc[key]);

			let componentsSupporting;
			if (characteristicsCalc[key]) {
				componentsSupporting =
					components[characteristicsCalc[key].support];
			}

			let costComponent = characteristicsCalc[key].cost.initial;
			let initialLifeDays = characteristicsCalc[key].wear.initial;

			components[key].map((component, index) => {
				// loop of all components in types (motherboards)

				costComponent =
					characteristicsCalc[key].cost.ratio * costComponent;
				component.cost = costComponent;
				component.lvl = ++index;
				component.rating = formattingNumber(costComponent * 1.3, 1);

				initialLifeDays =
					characteristicsCalc[key].wear.ratio * initialLifeDays;

				component.wear = {
					current: 0,
					lifeTime: initialLifeDays,
					ratio: characteristicsCalc[key].wear.ratio,
					time: 1200000,
				};

				if (component.supporting_components) {
					component.supporting_components =
						component.supporting_components.map((componentID) => {
							let component = componentsSupporting.find(
								(element) => element.id === componentID
							);

							return {
								id: component.id,
								name: component.name,
								image: component.image,
							};
						});
				}
			});
		}
	}

	return components;
};
