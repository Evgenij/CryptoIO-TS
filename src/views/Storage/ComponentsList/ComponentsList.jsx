import React from "react";
import StorageComponent from "../../../components/StorageComponent/StorageComponent";

const ComponentsList = ({
	products,
	layoutStyles,
	storageForSelect,
	onSelect,
}) => {
	return (
		<div className={["components-list", layoutStyles].join(" ")}>
			{products.map((product) => (
				<StorageComponent
					key={product.data.id}
					details={product}
					isSelecting={storageForSelect}
					onSelect={onSelect}
				/>
			))}
		</div>
	);
};

export default ComponentsList;
