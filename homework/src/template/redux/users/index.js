import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";
import { IDLE, PENDING, FULFILLED, REJECTED } from "../dataStatus";

const entityAdapter = createEntityAdapter();
export const usersSlice = createSlice({
	name: "users",
	initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
	selectors: {
		selectUsersIds: (state) => state.ids,
		selectUserById: (state, id) => state.entities[id],
		selectUserRequestStatus: (state) => state.requestStatus,
	},
	extraReducers: (builder) =>
		builder
			.addCase(getUsers.pending, (state) => {
				state.requestStatus = PENDING;
			})
			.addCase(getUsers.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload);

				state.requestStatus = FULFILLED;
			})
			.addCase(getUsers.rejected, (state) => {
				state.requestStatus = REJECTED;
			}),
});
export const { selectUsersIds, selectUserRequestStatus, selectUserById } =
	usersSlice.selectors;
