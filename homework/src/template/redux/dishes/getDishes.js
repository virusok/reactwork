import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from ".";
import { selectRestaurantById } from "../restaurants";

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
		condition: (restaurantId, { getState }) => {
			const restaurant = selectRestaurantById(getState(), restaurantId);
			const { menu } = restaurant;

			for (let menuId of menu) {
				if (!selectDishById(getState(), menuId)) {
					return true;
				}
			}
			return false;
		},
	}
);
