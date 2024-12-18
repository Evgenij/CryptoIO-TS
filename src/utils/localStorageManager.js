export const setDataToLocal = (key, data) => {
	localStorage.setItem(key, data);
};

export const getDataFromLocal = (key) => {
	return JSON.parse(localStorage.getItem(key));
};
