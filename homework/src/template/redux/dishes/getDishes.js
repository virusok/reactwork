import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesIds } from ".";

export const getDishes = createAsyncThunk(
	"dishes/getDishes",
	async (restaurantId, { rejectWithValue }) => {
		const response = await fetch(
			`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
		);
		const result = await response.json();

		if (!result.length) {
			rejectWithValue("no data");
			return;
		}
		return result;
	},
	{
		condition: (_, { getState }) => {
			return selectDishesIds(getState()).length === 0;
		},
	}
);
