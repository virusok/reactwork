import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./getDishes";
import { getDish } from "./getDish";
import { IDLE, PENDING, FULFILLED, REJECTED } from "../dataStatus";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
	name: "dishes",
	initialState: entityAdapter.getInitialState({
		requestStatus: IDLE,
		requestStatusForPage: IDLE,
	}),
	selectors: {
		selectDishesIds: (state) => state.ids,
		selectDishById: (state, id) => state.entities[id],
		selectDishForPage: (state, id) => state.entities[id],
		selectDishRequestStatus: (state) => state.requestStatus,
		selectDishForPageRequestStatus: (state) => state.requestStatusForPage,
	},
	extraReducers: (builder) =>
		builder
			.addCase(getDishes.pending, (state) => {
				state.requestStatus = PENDING;
			})
			.addCase(getDishes.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload);
				state.requestStatus = FULFILLED;
			})
			.addCase(getDishes.rejected, (state) => {
				state.requestStatus = REJECTED;
			})

			.addCase(getDish.pending, (state) => {
				state.requestStatusForPage = PENDING;
			})
			.addCase(getDish.fulfilled, (state, { payload }) => {
				entityAdapter.setOne(state, payload);
				state.requestStatusForPage = FULFILLED;
			})
			.addCase(getDish.rejected, (state) => {
				state.requestStatusForPage = REJECTED;
			}),
});

export const {
	selectDishesIds,
	selectDishById,
	selectDishRequestStatus,
	selectDishForPage,
	selectDishForPageRequestStatus,
} = dishesSlice.selectors;
