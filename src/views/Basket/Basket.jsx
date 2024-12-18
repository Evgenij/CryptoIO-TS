import React, { useEffect, useState } from "react";
import styles from "./Basket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import BasketProduct from "./BasketProduct/BasketProduct";
import formattingNumber from "../../utils/formattingNumber";
import Button from "../../components/ui/Button/Button";
import { removeMoney } from "../../store/slices/resourcesSlice";
import useCountProducts from "../../hooks/useCountProducts";
import { setDataToLocal } from "../../utils/localStorageManager";
import {
	BASKET_PRODUCTS,
	STORAGE_PRODUCTS,
} from "../../constants/storageNames";
import { clearBasket } from "../../store/slices/basketSlice";
import EmptyStateLabel from "../../components/ui/EmptyStateLabel/EmptyStateLabel";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../constants/routes";
import { addProductToStorage } from "../../store/slices/storageSlice";

const Basket = () => {
	const { products } = useSelector((state) => {
		return state.basket;
	});
	const { money } = useSelector((state) => {
		return state.resources;
	});
	const countProducts = useCountProducts();
	const dispatch = useDispatch();

	const [sum, setSum] = useState();

	const calculateSum = () => {
		return products
			? products.reduce(
					(accumulator, currentValue) =>
						accumulator +
						currentValue.data.cost * currentValue.count,
					0
			  )
			: 0;
	};

	const buyComponents = () => {
		dispatch(removeMoney(sum));

		products.forEach((product) => {
			dispatch(addProductToStorage(product));
		});

		dispatch(clearBasket());
	};

	useEffect(() => {
		setSum(calculateSum());
	}, [products]);

	console.log(products);

	return (
		<section
			className={[
				styles.basket,
				"flex justify-center space-x-6 h-full",
			].join(" ")}
		>
			<div className="list-products flex flex-col w-3/5 bg-panel-light">
				<header className="p-5 flex items-center justify-between bg-panel">
					<h2 className="text-2xl">Basket</h2>
					<span className="text-base text-gray-500">
						x{countProducts} products
					</span>
				</header>
				<div className="list overflow-y-auto h-full">
					{products.length !== 0 ? (
						products.map((product) => {
							return (
								<BasketProduct
									key={product.data.id}
									details={product}
									styles={[
										styles.product,
										"product flex space-x-3 p-2 border-opacity-20",
									].join(" ")}
								/>
							);
						})
					) : (
						<EmptyStateLabel header="Basket is empty">
							<Link to={SHOP_ROUTE}>
								<Button color="blue">🛍️ Go to shop</Button>
							</Link>
						</EmptyStateLabel>
					)}
				</div>
			</div>
			<div className="check w-1/5 bg-panel-light h-fit">
				<header className="p-5 flex items-center justify-between bg-panel">
					<h3 className="text-2xl">Sum to pay</h3>
				</header>
				<div className="data p-4 flex flex-col space-y-3">
					{products && (
						<p className="font-bold text-2xl">
							$ {formattingNumber(sum)}{" "}
						</p>
					)}
					<Button
						disabled={sum > money || countProducts === 0}
						color="green"
						stylesTailwind="w-full"
						onClick={() => buyComponents()}
					>
						Buy
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Basket;
