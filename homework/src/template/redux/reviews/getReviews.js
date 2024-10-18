import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewById } from ".";
import { selectRestaurantById } from "../restaurants";

export const getReviews = createAsyncThunk(
	"reviews/getReviews",
	async (restaurantId, { rejectWithValue }) => {
		const response = await fetch(
			`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
		);
		const result = await response.json();

		if (!result.length) {
			rejectWithValue("no data Reviews");
			return;
		}
		return result;
	},
	{
		condition: (restaurantId, { getState }) => {
			const restaurant = selectRestaurantById(getState(), restaurantId);
			const { menu } = restaurant;

			for (let menuId of menu) {
				if (!selectReviewById(getState(), menuId)) {
					return true;
				}
			}
			return false;
		},
	}
);
