import { useReducer } from "react";

const ratingMinCounter = 1;
const ratingMaxCounter = 5;
const DEFAULT_VALUES = {
	userName: "",
	reviewText: "",
	rating: ratingMinCounter,
};
const SET_NAME = "setName";
const SET_REVIEW = "setReview";
const SET_RATING = "setRating";
const CLEAR_FORM = "clearForm";
const reducer = (state, action) => {
	const { type, element } = action;
	switch (type) {
		case SET_NAME:
			return {
				...DEFAULT_VALUES,
				userName: element,
			};
		case SET_REVIEW:
			return {
				...state,
				reviewText: element,
			};
		case SET_RATING:
			return {
				...state,
				rating: element,
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

export const useForm = () => {
	const [form, dispatch] = useReducer(reducer, DEFAULT_VALUES);
	const { userName, reviewText, rating } = form;

	const setName = (value) => {
		dispatch({ type: SET_NAME, element: value });
	};
	const setReview = (value) => {
		dispatch({ type: SET_REVIEW, element: value });
	};
	const setRating = (value) => {
		if (value >= ratingMinCounter && value <= ratingMaxCounter) {
			dispatch({ type: SET_RATING, element: value });
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
