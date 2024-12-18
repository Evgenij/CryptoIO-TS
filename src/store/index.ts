import { configureStore } from "@reduxjs/toolkit";
import stationComponentsSlice from "./slices/stationComponentsSlice.js";
import resourcesSlice from "./slices/resourcesSlice.js";
import basketSlice from "./slices/basketSlice.js";
import storageSlice from "./slices/storageSlice.js";

export default configureStore({
	reducer: {
		components: stationComponentsSlice,
		resources: resourcesSlice,
		basket: basketSlice,
		storage: storageSlice,
	},
});
