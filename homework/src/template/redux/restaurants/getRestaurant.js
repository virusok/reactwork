import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from ".";

export const getRestaurant = createAsyncThunk(
	"restaurants/getRestaurant",
	async (restaurantId, { rejectWithValue }) => {
		const response = await fetch(
			`http://localhost:3001/api/restaurant/${restaurantId}`
		);
		const result = await response.json();

		if (!result.name) {
			rejectWithValue("no data");
			return;
		}
		return result;
	},
	{
		condition: (restaurantId, { getState }) => {
			if (selectRestaurantById(getState(), restaurantId)) {
				return true;
			}
			return false;
		},
	}
);
