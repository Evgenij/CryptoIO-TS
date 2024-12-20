import { IComponent } from "../types/index";

export default (components: IComponent[]) => {
	const res = components.map((component, index) => {
		return { ...component, lvl: index++, id: component.initialID + index };
	});
	console.log(res);
};
