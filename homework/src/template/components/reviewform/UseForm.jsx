import { useReducer } from "react";

const RatingMinCounter = 1;
const RatingMaxCounter = 5;
const DEFAULT_VALUES = {
	userName: "",
	reviewText: "",
	rating: RatingMinCounter,
};
const SET_NAME = "setName";
const SET_REVIEW = "setReview";
const SET_RATING = "setRating";
const CLEAR_FORM = "clearForm";
const reducer = (state, action) => {
	const { type, Task } = action;
	switch (type) {
		case SET_NAME:
			return {
				...DEFAULT_VALUES,
				userName: Task,
			};
		case SET_REVIEW:
			return {
				...state,
				reviewText: Task,
			};
		case SET_RATING:
			return {
				...state,
				rating: Task,
			};
		case CLEAR_FORM:
			return {
				...DEFAULT_VALUES,
			};
		default: {
			return state;
		}
	}
};

export const UseForm = () => {
	const [form, dispatch] = useReducer(reducer, DEFAULT_VALUES);
	const { userName, reviewText, rating } = form;

	const setName = (value) => {
		dispatch({ type: SET_NAME, Task: value });
	};
	const setReview = (value) => {
		dispatch({ type: SET_REVIEW, Task: value });
	};
	const setRating = (value) => {
		if (value >= RatingMinCounter && value <= RatingMaxCounter) {
			dispatch({ type: SET_RATING, Task: value });
		}
	};
	const clearForm = () => {
		dispatch({ type: CLEAR_FORM });
	};
	return {
		userName,
		reviewText,
		setName,
		setReview,
		rating,
		setRating,
		clearForm,
	};
};
