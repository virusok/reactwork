import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./restaurants";
import { dishesSlice } from "./dishes";
import { reviewsSlice } from "./reviews";
import { usersSlice } from "./users";
import { cartSlice } from "./ui/cart";
export const store = configureStore({
	reducer: {
		[restaurantsSlice.name]: restaurantsSlice.reducer,
		[dishesSlice.name]: dishesSlice.reducer,
		[reviewsSlice.name]: reviewsSlice.reducer,
		[usersSlice.name]: usersSlice.reducer,
		[cartSlice.name]: cartSlice.reducer,
	},
});
