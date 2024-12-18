import { createSlice } from "@reduxjs/toolkit";
import { BASKET_PRODUCTS } from "../../constants/storageNames";
import {
	setDataToLocal,
	getDataFromLocal,
} from "../../utils/localStorageManager";

const getProducts = () => {
	// console.log("products", localStorage.getItem(BASKET_PRODUCTS));
	const products = localStorage.getItem(BASKET_PRODUCTS);

	return products?.length === 0 || products === null
		? []
		: getDataFromLocal(BASKET_PRODUCTS);
};

const basketSlice = createSlice({
	name: "basket",
	initialState: {
		products: getProducts(),
	},
	reducers: {
		addProduct(state, action) {
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

			setDataToLocal(BASKET_PRODUCTS, JSON.stringify(state.products));
		},
		removeProduct(state, action) {
			state.products = state.products.filter(
				(product) => product.data.id !== action.payload
			);

			setDataToLocal(BASKET_PRODUCTS, JSON.stringify(state.products));
		},
		changeProductCount(state, action) {
			state.products = state.products.map((product) => {
				if (product.data.id === action.payload.id) {
					return { ...product, count: action.payload.count };
				}

				return product;
			});

			setDataToLocal(BASKET_PRODUCTS, JSON.stringify(state.products));
		},
		clearBasket(state, action) {
			state.products = [];
			setDataToLocal(BASKET_PRODUCTS, []);
		},
	},
});

export const { addProduct, removeProduct, changeProductCount, clearBasket } =
	basketSlice.actions;
export default basketSlice.reducer;
