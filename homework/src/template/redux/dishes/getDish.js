import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from ".";

export const getDish = createAsyncThunk(
	"dishes/getDish",
	async (dishId, { rejectWithValue }) => {
		const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
		const result = await response.json();

		if (!result.name) {
			rejectWithValue("no data");
			return;
		}
		return result;
	},
	{
		condition: (dishId, { getState }) => {
			return selectDishById(getState(), dishId);
		},
	}
);
