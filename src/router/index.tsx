import { createBrowserRouter } from "react-router-dom";
import Menu from "../views/Menu/Menu";
import MiningArea from "../views/MiningArea";
import {
	BASKET_ROUTE,
	DASHBOARD_ROUTE,
	EDIT_STATION_ROUTE,
	ERROR_ROUTE,
	MENU_ROUTE,
	MINING_AREA_ROUTE,
	SHOP_ROUTE,
	STORAGE_ROUTE,
} from "../constants/routes";
import ErrorPage from "../views/ErrorPage";
import Shop from "../views/Shop/Shop";
import PageLayout from "../views/PageLayout";
import Basket from "../views/Basket/Basket";
import EditArea from "../views/EditArea/EditArea";
import Storage from "../views/Storage/Storage";

const router = createBrowserRouter([
	{
		path: ERROR_ROUTE,
		element: <ErrorPage />,
	},
	{
		path: MENU_ROUTE,
		element: <Menu />,
	},
	{
		path: DASHBOARD_ROUTE,
		element: <PageLayout />,
		children: [
			{
				path: MINING_AREA_ROUTE,
				element: <MiningArea />,
			},
			{
				path: SHOP_ROUTE,
				element: <Shop />,
			},
			{
				path: BASKET_ROUTE,
				element: <Basket />,
			},
			{
				path: STORAGE_ROUTE,
				element: <Storage />,
			},
			{
				path: EDIT_STATION_ROUTE,
				element: <EditArea />,
			},
		],
	},
]);

export default router;
