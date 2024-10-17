import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";
import { IDLE, PENDING, FULFILLED, REJECTED } from "../dataStatus";

const entityAdapter = createEntityAdapter();
export const restaurantsSlice = createSlice({
	name: "restaurants",
	initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
	selectors: {
		selectRestaurantIds: (state) => state.ids,
		selectRestaurantById: (state, id) => state.entities[id],
		selectRestaurantRequestStatus: (state) => state.requestStatus,
	},
	extraReducers: (builder) =>
		builder
			.addCase(getRestaurants.pending, (state) => {
				state.requestStatus = PENDING;
			})
			.addCase(getRestaurants.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload);
				state.requestStatus = FULFILLED;
			})
			.addCase(getRestaurants.rejected, (state) => {
				state.requestStatus = REJECTED;
			}),
});

export const {
	selectRestaurantIds,
	selectRestaurantById,
	selectRestaurantRequestStatus,
} = restaurantsSlice.selectors;
