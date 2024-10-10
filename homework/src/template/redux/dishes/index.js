import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../database/normalized-mock";

const initialState = {
	entities: normalizedDishes.reduce((acc, item) => {
		acc[item.id] = item;
		return acc;
	}, {}),
	ids: normalizedDishes.map(({ id }) => id),
};

export const dishesSlice = createSlice({
	name: "dishes",
	initialState,
	selectors: {
		selectDishesById: (state, id) => state.entities[id],
	},
});

export const { selectDishesById } = dishesSlice.selectors;
