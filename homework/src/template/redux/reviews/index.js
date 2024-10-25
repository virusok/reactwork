import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./getReviews";
import { IDLE, PENDING, FULFILLED, REJECTED } from "../dataStatus";

const entityAdapter = createEntityAdapter();
export const reviewsSlice = createSlice({
	name: "reviews",
	initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
	selectors: {
		selectReviewIds: (state) => state.ids,
		selectReviewById: (state, id) => state.entities[id],
		selectReviewRequestStatus: (state) => state.requestStatus,
	},
	extraReducers: (builder) =>
		builder
			.addCase(getReviews.pending, (state) => {
				state.requestStatus = PENDING;
			})
			.addCase(getReviews.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload);

				state.requestStatus = FULFILLED;
			})
			.addCase(getReviews.rejected, (state) => {
				state.requestStatus = REJECTED;
			}),
});
export const { selectReviewIds, selectReviewById, selectReviewRequestStatus } =
	reviewsSlice.selectors;
