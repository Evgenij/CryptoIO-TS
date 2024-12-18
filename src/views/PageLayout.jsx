import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const PageLayout = () => {
	return (
		<div className="flex flex-col h-full">
			<Header />
			<main className="h-full p-3">
				<Outlet />
			</main>
		</div>
	);
};

export default PageLayout;
