import React, { useEffect, useState } from "react";
import styles from "./BasketProduct.module.scss";
import Button from "../../../components/ui/Button/Button";
import Counter from "../../../components/Counter/Counter";
import formattingNumber from "../../../utils/formattingNumber";
import { useDispatch } from "react-redux";
import {
	changeProductCount,
	removeProduct,
} from "../../../store/slices/basketSlice";

const BasketProduct = ({ details }) => {
	const [cost, setCost] = useState(details.data.cost);
	const [count, setCount] = useState(details.count);

	const dispatch = useDispatch();

	useEffect(() => {
		setCost(count * details.data.cost);
		dispatch(changeProductCount({ id: details.data.id, count }));
	}, [count]);

	const deleteProductFromBasket = (id) => {
		console.log(id);
		dispatch(removeProduct(id));
	};

	const changeCountProduct = () => {};

	return (
		<div
			className={[
				styles.basketProduct,
				"product flex items-center space-x-3 p-5",
			].join(" ")}
		>
			<div className="name flex w-full items-center space-x-4">
				<div className="flex items-center img-wrapp h-28">
					<img
						src={details.data.image}
						alt={details.data.image}
						className="h-full"
					/>
				</div>
				<h3 className="font-semibold text-base">{details.data.name}</h3>
			</div>
			<div className="text-base w-1/5 text-center">x{count}</div>
			<Counter value={count} onChangeValue={(value) => setCount(value)} />
			<div className="w-2/5 flex justify-center text-lg">
				$ {formattingNumber(cost)}
			</div>
			<div className="buttons w-fit">
				<Button
					shadow
					onClick={() => deleteProductFromBasket(details.data.id)}
				>
					❌
				</Button>
			</div>
		</div>
	);
};

export default BasketProduct;
