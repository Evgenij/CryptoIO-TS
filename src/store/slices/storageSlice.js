import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_PRODUCTS } from "../../constants/storageNames";
import {
	setDataToLocal,
	getDataFromLocal,
} from "../../utils/localStorageManager";

const getProducts = () => {
	// console.log("products", localStorage.getItem(BASKET_PRODUCTS));
	const products = localStorage.getItem(STORAGE_PRODUCTS);

	// console.log("!!!!", products);

	return products?.length === 0 || products === null
		? []
		: getDataFromLocal(STORAGE_PRODUCTS);
};

const storageSlice = createSlice({
	name: "storage",
	initialState: {
		products: getProducts(),
	},
	reducers: {
		addProductToStorage(state, action) {
			console.log(action.payload.data);
			const product = state.products.find(
				({ data }) => data.id === action.payload.data.id
			);

			if (!product) {
				console.log("product to add");
				state.products = [action.payload, ...state.products];
			} else {
				console.log("product to change");

				state.products = state.products.map((product) => {
					if (action.payload.data.id === product.data.id) {
						return {
							data: { ...product.data },
							count: product.count + action.payload.count,
						};
					} else {
						return product;
					}
				});
			}

			setDataToLocal(STORAGE_PRODUCTS, JSON.stringify(state.products));
		},
		removeProductFromStorage(state, action) {
			// action = {id: X, count: Y}
			const newListProducts = state.products.map((product) => {
				if (product.data.id === action.payload.id) {
					return {
						data: { ...product.data },
						count: product.count - action.payload.count,
					};
				} else {
					return product;
				}
			});

			state.products = newListProducts.filter(({ count }) => count !== 0);
			setDataToLocal(STORAGE_PRODUCTS, JSON.stringify(state.products));
		},
		changeProductCount(state, action) {
			state.products = state.products.map((product) => {
				if (product.data.id === action.payload.id) {
					return { ...product, count: action.payload.count };
				}

				return product;
			});

			setDataToLocal(STORAGE_PRODUCTS, JSON.stringify(state.products));
		},
	},
});

export const {
	addProductToStorage,
	removeProductFromStorage,
	changeProductCount,
} = storageSlice.actions;
export default storageSlice.reducer;
