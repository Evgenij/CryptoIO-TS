import React, { useEffect, useState } from "react";
import styles from "./StorageComponent.module.scss";
import Button from "../ui/Button/Button";
import Counter from "../Counter/Counter";
import { useDispatch } from "react-redux";
import { addMoney } from "../../store/slices/resourcesSlice";
import { removeProductFromStorage } from "../../store/slices/storageSlice";
import getColorOfLevel from "../../utils/getColorOfLevel";
import formattingNumber from "../../utils/formattingNumber";

const StorageComponent = ({ details, isSelecting = false, onSelect }) => {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const [countProduct, setCountProduct] = useState(details.count);
	const [costComponent, setCostComponent] = useState(details.data.cost / 2);

	const dispatch = useDispatch();

	const bgColor = {
		// background: rgb(75, 75, 138),
		background: `radial-gradient(circle, ${getColorOfLevel(
			details.data.image
		)} 40%, rgb(0, 0, 0) 105%)`,
	};

	const responsePopup = (res) => {
		if (res) {
			dispatch(addMoney(costComponent));
			dispatch(
				removeProductFromStorage({
					id: details.data.id,
					count: countProduct,
				})
			);
		}

		setVisiblePopup(false);
	};

	useEffect(() => {
		setCostComponent((prev) => (details.data.cost / 2) * countProduct);
	}, [countProduct]);

	return isSelecting == false ? (
		<div
			className={[
				styles.storageComponent,
				"bg-panel-light flex flex-col justify-between h-full relative",
			].join(" ")}
		>
			<div className="img-wrapp p-4" style={bgColor}>
				<div
					className="h-36 bg-image"
					style={{ backgroundImage: `url(${details.data.image})` }}
				></div>{" "}
			</div>
			<div className="data flex flex-col h-full space-y-3 p-3">
				<h3 className="text-base h-full">{details.data.name}</h3>
				<div className="flex justify-between items-center">
					<span className="p-3 bg-panel font-semibold">
						x{details.count}
					</span>
					<div className="relative">
						<Button
							color="gray"
							onClick={() => setVisiblePopup(!visiblePopup)}
						>
							💵 Sell
						</Button>
					</div>
				</div>
			</div>
			<div
				className={[
					" p-3 top-full left-0 w-full bg-panel z-50",
					styles.popup,
					visiblePopup ? "flex absolute" : "hidden",
				].join(" ")}
			>
				<div
					className={[
						"flex flex-col items-start space-y-4 w-full ",
					].join(" ")}
				>
					<div className="counter flex items-center w-full space-x-2 justify-between">
						<span className="inline-block w-max">
							Products for sale:
						</span>
						<Counter
							max={details.count}
							value={1}
							onChangeValue={(value) => setCountProduct(value)}
						/>
					</div>

					<div className="buttons flex justify-between space-x-2 w-full">
						<Button
							color="gray"
							stylesTailwind="w-full"
							onClick={() => setVisiblePopup(!visiblePopup)}
						>
							Cancel
						</Button>
						<Button
							stylesTailwind="w-full"
							color="green"
							onClick={() => responsePopup(true)}
						>
							Sell ${formattingNumber(costComponent)}
						</Button>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div
			className={[styles.isSelecting, ""].join(" ")}
			style={{
				borderColor: getColorOfLevel(details.data.image),
				borderWidth: "2px",
				borderStyle: "solid",
			}}
			onClick={onSelect}
		>
			<div className="img-wrapp p-4" style={bgColor}>
				<div
					className="h-32 bg-image"
					style={{ backgroundImage: `url(${details.data.image})` }}
				></div>{" "}
			</div>
			<div className="data flex justify-between space-x-2 p-2 px-3">
				<h3 className="text-base h-full">{details.data.name}</h3>
				<span className="py-1 opacity-40 font-semibold">
					x{details.count}
				</span>{" "}
			</div>
		</div>
	);
};

export default StorageComponent;
