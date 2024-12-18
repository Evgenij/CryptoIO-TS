import React from "react";

const EmptyStateLabel = ({ header, subheader = "", children }) => {
	return (
		<div className="flex w-full h-full flex-col justify-center items-center space-y-3">
			<p className="font-bold text-gray-700 text-lg">{header}</p>
			{subheader && (
				<span className="text-gray-700 text-center">{subheader}</span>
			)}
			{children}
		</div>
	);
};

export default EmptyStateLabel;
