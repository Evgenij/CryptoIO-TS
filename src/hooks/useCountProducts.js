import { useSelector } from "react-redux";

export default () => {
	const { products } = useSelector((state) => {
		return state.basket;
	});

	return products ? products.reduce((acc, curr) => acc + curr.count, 0) : 0;
};