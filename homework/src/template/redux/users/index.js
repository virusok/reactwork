import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../database/normalized-mock";

const initialState = {
	entities: normalizedUsers.reduce((acc, item) => {
		acc[item.id] = item;
		return acc;
	}, {}),
	ids: normalizedUsers.map(({ id }) => id),
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	selectors: {
		selectUsersIds: (state) => state.ids,
		selectUsersById: (state, id) => state.entities[id],
	},
});

export const { selectUsersIds, selectUsersById } = usersSlice.selectors;
