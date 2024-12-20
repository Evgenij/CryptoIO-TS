import { Motherboards } from "../types/types components/manufactures";

export interface ICharacteristic {
	name: string;
	value: number;
	label: string;
}

export interface IComponent {
	id?: number;
	initialID: number;
	lvl?: number;
	model: string;
	image: string;
	supporting_components: number[];
	characteristics: ICharacteristic[];
	W: number;
	electricConsumption?: number;
}

export interface IMotherboard extends IComponent {
	manufacturer: Motherboards;
	slots: {
		RAM: number;
		SSD: number;
	};
	maxSizeRAM: number;
}
