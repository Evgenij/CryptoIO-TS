export default (value, fraction = 1) =>
	new Intl.NumberFormat("en", {
		notation: "compact",
		maximumFractionDigits: fraction,
	}).format(value);
