import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import "./styles/index.scss";
import router from "./router/index.tsx";
import { RouterProvider } from "react-router-dom";

import "primereact/resources/themes/lara-dark-teal/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
