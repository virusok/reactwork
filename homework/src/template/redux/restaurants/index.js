import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";
import { getRestaurant } from "./getRestaurant";
import { IDLE, PENDING, FULFILLED, REJECTED } from "../dataStatus";

const entityAdapter = createEntityAdapter();
export const restaurantsSlice = createSlice({
	name: "restaurants",
	initialState: entityAdapter.getInitialState({
		requestStatus: IDLE,
		requestStatusById: IDLE,
	}),
	selectors: {
		selectRestaurantIds: (state) => state.ids,
		selectRestaurantById: (state, id) => state.entities[id],
		selectRestaurantsRequestStatus: (state) => state.requestStatus,
		selectRestaurantByIdRequestStatus: (state) => state.requestStatusById,
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
			})

			.addCase(getRestaurant.pending, (state) => {
				state.requestStatusById = PENDING;
			})
			.addCase(getRestaurant.fulfilled, (state, { payload }) => {
				entityAdapter.setOne(state, payload);
				state.requestStatusById = FULFILLED;
			})
			.addCase(getRestaurant.rejected, (state) => {
				state.requestStatusById = REJECTED;
			}),
});

export const {
	selectRestaurantIds,
	selectRestaurantById,
	selectRestaurantsRequestStatus,
	selectRestaurantByIdRequestStatus,
} = restaurantsSlice.selectors;
