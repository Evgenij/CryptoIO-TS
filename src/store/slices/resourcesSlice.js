import { createSlice } from "@reduxjs/toolkit";

const resourcesSlice = createSlice({
	name: "resources",
	initialState: {
		money: 50000,
	},
	reducers: {
		addMoney(state, action) {
			state.money = state.money + action.payload;
		},
		removeMoney(state, action) {
			state.money = state.money - action.payload;
		},
	},
});

export const { addMoney, removeMoney } = resourcesSlice.actions;
export default resourcesSlice.reducer;
