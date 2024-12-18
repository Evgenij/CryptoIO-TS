import React, { useEffect, useState } from "react";
import styles from "./ComponentItem.module.scss";
import Button from "../../ui/Button/Button";
import Counter from "../../Counter/Counter";
import formattingNumber from "../../../utils/formattingNumber";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../store/slices/basketSlice";
import { getComponentByID } from "../../../utils/getters";
import ComponentDisplay from "../../ComponentDisplay/ComponentDisplay.jsx";

const ComponentItem = ({ details }) => {
	const [count, setCount] = useState(1);
	const [cost, setCost] = useState(details.cost);

	const dispatch = useDispatch();
	const { allComponents } = useSelector((state) => {
		return state.components;
	});

	useEffect(() => {
		if (count > 0) {
			setCost(details.cost * count);
		}
	}, [count]);

	const addProductToBasket = (id) => {
		const product = getComponentByID(allComponents, id);
		dispatch(addProduct({ count, data: product }));
	};

	return (
		<div
			className={[
				styles.componentItem,
				"bg-panel-light flex flex-col justify-between",
			].join(" ")}
		>
			{/*<div*/}
			{/*	className="img-wrapp flex h-56 items-center m-4 bg-image"*/}
			{/*	style={{ backgroundImage: `url(${details.image})` }}*/}
			{/*></div>*/}

			<div className="dataflex flex-col">
				<ComponentDisplay image={details.image} />
				<h3 className="text-lg p-2 px-3 font-bold bg-white-3">
					{details.name} - {details.rating}
				</h3>
				<div className="data-items p-3 grid grid-cols-2 gap-2">
					<div className="characteristics flex flex-col space-y-2 w-fit">
						<header className="text-xs w-full opacity-50">
							Characteristics
						</header>
						<div className="supported-devices__list devices flex flex-col space-y-1">
							{details.characteristics &&
								details.characteristics.map(
									(characteristic) => {
										return (
											<div
												key={characteristic.name}
												className="devices-item flex space-x-1"
											>
												<span className="opacity-30 text-xs">
													▶
												</span>
												<span className="opacity-50">
													{characteristic.name}:
												</span>
												<span>
													{characteristic.value}
												</span>
												<span>
													{characteristic.label}
												</span>
											</div>
										);
									}
								)}
						</div>
					</div>
					<div className="supported-devices flex flex-col space-y-2">
						<header className="text-xs w-full opacity-50">
							Supported devices
						</header>
						{/* Compatible with all components */}
						<div className="supported-devices__list devices flex flex-col space-y-1">
							{details.supporting_components
								? details.supporting_components.map(
										(component) => {
											return (
												<div
													key={component.id}
													className="group w-fit relative devices-item flex space-x-1"
												>
													<span className="opacity-30 text-xs">
														▶
													</span>
													<span className="hover:underline cursor-pointer leading-4">
														{component.name}
													</span>
													<div
														className="absolute border-2 border-solid border-slate-500 hidden group-hover:block
														bottom-7 right-0 p-5 bg-panel"
													>
														<img
															className="h-48"
															src={
																component.image
															}
															alt={
																component.image
															}
														/>
													</div>
												</div>
											);
										}
								  )
								: "Compatible with all components"}
						</div>
					</div>
				</div>
			</div>
			<div
				className={[
					styles.cost,
					"cost p-3 flex items-center justify-between",
				].join(" ")}
			>
				<p className="text-xl font-semibold">
					$ {formattingNumber(cost, 1)}
				</p>
				<div className="buttons flex items-center space-x-2">
					<Counter
						value={count}
						onChangeValue={(value) => setCount(value)}
					/>
					<Button
						color="green"
						onClick={() => addProductToBasket(details.id)}
					>
						🛒 In cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ComponentItem;
