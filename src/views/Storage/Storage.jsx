import React, { useEffect, useState } from "react";
import { getDataFromLocal } from "../../utils/localStorageManager";
import { STORAGE_PRODUCTS } from "../../constants/storageNames";
import styles from "./Storage.module.scss";
import EmptyStateLabel from "../../components/ui/EmptyStateLabel/EmptyStateLabel";
import Button from "../../components/ui/Button/Button";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../constants/routes";
import ComponentsList from "./ComponentsList/ComponentsList";
import { useSelector } from "react-redux";

const Storage = () => {
	const { products } = useSelector((state) => {
		return state.storage;
	});

	return (
		<section className={[styles.storage, "h-full overflow-auto"].join(" ")}>
			{products.length !== 0 ? (
				<ComponentsList
					layoutStyles="p-3 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
					products={products}
				/>
			) : (
				<EmptyStateLabel header="Oops... It's empty">
					<Link to={SHOP_ROUTE}>
						<Button>Go to shop</Button>
					</Link>
				</EmptyStateLabel>
			)}
		</section>
	);
};

export default Storage;
