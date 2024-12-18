import React from "react";

const ErrorPage = () => {
	return (
		<div
			id="error-page"
			className="h-screen flex flex-col items-center justify-center"
		>
			<h1 className="text-4xl">Oops!</h1>
			<p className="text-xl">Sorry, an unexpected error has occurred.</p>
		</div>
	);
};

export default ErrorPage;
