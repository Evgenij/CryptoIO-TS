import React from "react";
import styles from "./EditArea.module.scss";
import IMAGES from "../../images/images";
import StationItem from "../../ ../../components/Station/StationItem/StationItem";
import { useCallback, useState } from "react";
import Button from "../../components/ui/Button/Button";
import ComponentsList from "../Storage/ComponentsList/ComponentsList";
import { useSelector } from "react-redux";
import GroupButtons from "../../components/ui/GroupButtons/GroupButtons";

const EditArea = () => {
	const { motherboards, RIGs, CPUs, CPUsFANs, SSDs } = useSelector(
		(state) => {
			return state.components.components;
		}
	);

	const { products } = useSelector((state) => {
		return state.storage;
	});

	const [storageIsOpen, setStorageIsOpen] = useState(true);

	const selectComponent = () => {
		setStorageIsOpen(!storageIsOpen);
	};

	const items = [
		{ id: 1, label: "BTC", value: "BTC", checked: true },
		{ id: 2, label: "ETH", value: "ETH", checked: false },
		{ id: 3, label: "LTC", value: "LTC", checked: false },
	];

	return (
		<section className="grid gap-3 grid-cols-10 h-full">
			<section
				className={[storageIsOpen ? "col-span-3" : "col-span-7"].join(
					" "
				)}
			></section>
			<aside
				className={[
					"w-full bg-panel-light",
					storageIsOpen ? "col-span-7" : "col-span-3",
				].join(" ")}
			>
				{storageIsOpen ? (
					<div className="storage flex flex-col">
						<h3 className="text-xl p-2 px-3 bg-panel">Storage</h3>
						<ComponentsList
							layoutStyles="p-3 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
							products={products}
							storageForSelect={true}
							onSelect={() => selectComponent()}
						></ComponentsList>
					</div>
				) : (
					<div className="characteristics">
						<h3 className="text-xl p-2 px-3 bg-panel">
							Characteristics
						</h3>
						<div className="data flex flex-col space-y-4 p-3">
							<div className="grid grid-cols-2">
								<span className="p-3 text-center text-2xl bg-violet-700">
									123
								</span>
								<span className="p-3 text-center text-2xl bg-panel">
									Mh/s
								</span>
							</div>
							<GroupButtons
								buttons={items}
								onChange={(v) => console.log(v)}
							></GroupButtons>
							<section className="item-component pb-3 border-b-2 border-gray-800 border-solid">
								<header className="mb-2">
									<h4 className="opacity-50">Motherboard</h4>
									<div className="flex space-x-2 items-center">
										<h3 className="text-xl font-semibold">
											Asus Taming
										</h3>
										<span className="underline cursor-pointer opacity-40 hover:opacity-70 ">
											change
										</span>
									</div>
								</header>
								<div className="grid gap-2 grid-cols-2">
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
								</div>
							</section>
							<section className="item-component pb-3 border-b-2 border-gray-800 border-solid">
								<header className="mb-2">
									<h4 className="opacity-50">CPU</h4>
									<div className="flex space-x-2 items-center">
										<h3 className="text-xl font-semibold">
											Intel CORE i3
										</h3>
										<span className="underline cursor-pointer opacity-40 hover:opacity-70 ">
											change
										</span>
									</div>
								</header>
								<div className="grid gap-2 grid-cols-2">
									<p className="opacity-50 font-normal">
										Cores: 2
									</p>
									<p className="opacity-50 font-normal">
										Freguency: 2
									</p>
								</div>
							</section>
							<section className="item-component pb-2 border-b-2 border-gray-800 border-solid">
								<header className="mb-2">
									<h4 className="opacity-50">Motherboard</h4>
									<div className="flex space-x-2 items-center">
										<h3 className="text-xl font-semibold">
											Asus Taming
										</h3>
										<span className="underline cursor-pointer opacity-40 hover:opacity-70 ">
											change
										</span>
									</div>
								</header>
								<div className="grid gap-2 grid-cols-2">
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
								</div>
							</section>
							<section className="item-component pb-2 border-b-2 border-gray-800 border-solid">
								<header className="mb-2">
									<h4 className="opacity-50">Motherboard</h4>
									<div className="flex space-x-2 items-center">
										<h3 className="text-xl font-semibold">
											Asus Taming
										</h3>
										<span className="underline cursor-pointer opacity-40 hover:opacity-70 ">
											change
										</span>
									</div>
								</header>
								<div className="grid gap-2 grid-cols-2">
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
									<p className="opacity-50 font-normal">
										Ram slots: 2
									</p>
								</div>
							</section>

							<Button
								onClick={() => setStorageIsOpen(!storageIsOpen)}
							>
								open
							</Button>
						</div>
					</div>
				)}
			</aside>
		</section>
	);
};

export default EditArea;
