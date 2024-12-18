import React, { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import { Link, useLocation } from "react-router-dom";
import {
	MINING_AREA_ROUTE,
	SHOP_ROUTE,
	STORAGE_ROUTE,
} from "../../constants/routes";
import styles from "./Header.module.scss";
import formattingNumber from "../../utils/formattingNumber";
import { useDispatch, useSelector } from "react-redux";
import { addMoney } from "../../store/slices/resourcesSlice";
import useCountProducts from "../../hooks/useCountProducts";
import { STORAGE_PRODUCTS } from "../../constants/storageNames";
import useCountComponents from "../../hooks/useCountComponents";

const Header = () => {
	const location = useLocation();
	const [time, setTime] = useState();

	const { money } = useSelector((state) => {
		return state.resources;
	});

	const countProducts = useCountProducts();
	const countComponents = useCountComponents();

	const dispatch = useDispatch();

	useEffect(() => {
		// let watch = setInterval(() => {
		// 	const date = new Date();
		// 	setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
		// }, 1_000);

		return () => {
			// clearInterval(watch);
		};
	}, []);

	return (
		<header
			className={[
				styles.header,
				"m-2 flex justify-between items-center p-3",
			].join(" ")}
		>
			<div className="resources flex items-center space-x-3">
				<div className="resource flex flex-col p-2">
					<div className="flex space-x-4 text-xs">
						<span className="font-light">BTC</span>
						<span className="text-green-500">
							+{formattingNumber(0.000034, 6)} Mh/s
						</span>
					</div>
					<p className="text-lg font-semibold">0.000004</p>
				</div>
				<div className="resource flex flex-col p-2">
					<div className="flex space-x-4 text-xs">
						<span className="font-light">Ethereum</span>
						<span className="text-green-500">
							+{formattingNumber(0.002124, 6)} Mh/s
						</span>
					</div>
					<p className="text-lg font-semibold">0.004323</p>
				</div>
				<div>|</div>
				<div
					className="resource flex p-1 px-2 bg-green-700 cursor-pointer hover:bg-green-800"
					onClick={() => dispatch(addMoney(154.23323))}
				>
					<p className="text-xl font-semibold">
						$ {formattingNumber(money, 3)}
					</p>
				</div>
			</div>

			<div className="date-time text-xl font-semibold">{time}</div>

			<div className="buttons flex items-center space-x-2">
				<Link to={STORAGE_ROUTE}>
					<Button color="gray">
						📦 Storage{" "}
						{countComponents !== 0 && `[${countComponents}]`}
					</Button>
				</Link>

				<Button color="red">📈 Exchange</Button>
				{location.pathname == SHOP_ROUTE ? (
					<Link to={MINING_AREA_ROUTE}>
						<Button>💻 Workplace</Button>
					</Link>
				) : (
					<Link to={SHOP_ROUTE}>
						<Button color="blue">🛍️ Shop</Button>
					</Link>
				)}
			</div>
		</header>
	);
};

export default Header;
