import { useReducer } from "react";
const RatingMinCounter = 1;
const RatingMaxCounter = 5;
const DEFAULT_VALUES = {
	userName: "",
	reviewText: "",
	rating: RatingMinCounter,
};
const CASE_SET_NAME = "setName";
const CASE_SET_REVIEW = "setReview";
const CASE_SET_RATING = "setRating";
const CASE_CLEAR_FORM = "clearForm";
const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case CASE_SET_NAME:
			return {
				...DEFAULT_VALUES,
				userName: payload,
			};
		case CASE_SET_REVIEW:
			return {
				...state,
				reviewText: payload,
			};
		case CASE_SET_RATING:
			return {
				...DEFAULT_VALUES,
			};
		case CASE_CLEAR_FORM:
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
	const { userName, reviewText } = form;

	const setName = (value) => {
		dispatch({ type: CASE_SET_NAME, payload: value });
	};
	const setReview = (value) => {
		dispatch({ type: CASE_SET_REVIEW, payload: value });
	};
	const clearRating = () => {
		dispatch({ type: CASE_SET_RATING });
	};
	const clearForm = () => {
		dispatch({ type: CASE_CLEAR_FORM });
	};
	return {
		userName,
		reviewText,
		clearRating,
		setName,
		setReview,
		clearForm,
		RatingMaxCounter,
		RatingMinCounter,
	};
};
