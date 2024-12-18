const colorOfLevel = {
	1: "#525354",
	2: "#094DCA",
	3: "#3B8E07",
	4: "#FD900D",
	5: "#B00D0D",
	6: "#FDC527",
	7: "#FDFDFD",
};

export default (sourceString) => {
	const partString = sourceString.split("@")[0];
	const level = partString.substring(
		partString.length,
		partString.length - 1
	);
	return colorOfLevel[level];
};
