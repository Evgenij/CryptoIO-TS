import React, { useState } from "react";
import styles from "./Shop.module.scss";
import { useSelector } from "react-redux";
import ComponentItem from "../../components/ComponentsList/ComponentItem/ComponentItem";
import { Link } from "react-router-dom";
import { BASKET_ROUTE } from "../../constants/routes";
import Button from "../../components/ui/Button/Button";
import Select from "../../components/ui/Select/Select";
import useCountProducts from "../../hooks/useCountProducts";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import Toggle from "../../components/ui/Toggle/Toggle";

const Shop = () => {
	const { allComponents } = useSelector((state) => {
		return state.components;
	});
	const countProducts = useCountProducts();

	const options = [
		{
			id: 1,
			value: 1,
			name: "cost",
			label: "Cost increase",
		},
		{
			id: 2,
			value: 2,
			name: "cost",
			label: "Cost down",
		},
	];

	console.log(allComponents);

	const [valueSelect, setValueSelect] = useState();

	return (
		<main className="flex space-x-6">
			<aside
				className={[
					styles.panel,
					"w-1/5 h-fit max-h-fit sticky top-3",
				].join(" ")}
			>
				<header className="p-3 px-4 flex items-center justify-between bg-panel">
					<h3 className="text-lg">Filters</h3>
				</header>
				<main className="p-3 flex flex-col space-y-3">
					<Checkbox id="components" onChange={(val) => alert(val)}>
						Some text
					</Checkbox>
					<Toggle id="power" onChange={(val) => alert(val)}>
						Power
					</Toggle>
					<Button stylesTailwind="w-full">Apply</Button>
				</main>
			</aside>
			<section className="w-full flex flex-col space-y-4">
				<div
					className={[
						styles.panel,
						"sorting flex items-center space-x-3 justify-between p-3 sticky top-3 z-10",
					].join(" ")}
				>
					<Select
						defaultValue={"Choose option"}
						options={options}
						onChange={(val) => setValueSelect(val)}
					></Select>
					<Link to={BASKET_ROUTE}>
						<Button color="blue" stylesTailwind="w-fit">
							🛒 Basket [{countProducts}]
						</Button>
					</Link>
				</div>
				<div
					className={[
						"products-list pb-6 grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3",
					].join(" ")}
				>
					{allComponents &&
						allComponents.map((item) => {
							return (
								<ComponentItem key={item.id} details={item} />
							);
						})}
				</div>
			</section>
		</main>
	);
};

export default Shop;
