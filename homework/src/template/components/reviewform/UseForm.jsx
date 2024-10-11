import { useReducer } from "react";

const ratingMinCounter = 1;
const ratingMaxCounter = 5;
const SET_NAME = "setName";
const SET_REVIEW = "setReview";
const CLEAR_FORM = "clearForm";
const SET_RATING_PLUS = "counterPlusRating";
const SET_RATING_MINUS = "counterMinusRating";

const DEFAULT_VALUES = {
	userName: "",
	reviewText: "",
	rating: ratingMinCounter,
};

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
		case SET_RATING_PLUS:
			return {
				...state,
				rating: Math.min(state.rating + 1, ratingMaxCounter),
			};
		case SET_RATING_MINUS:
			return {
				...state,
				rating: Math.max(state.rating - 1, ratingMinCounter),
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
	const counterPlusRating = (value) => {
		dispatch({ type: SET_RATING_PLUS, element: value });
	};
	const counterMinusRating = (value) => {
		dispatch({ type: SET_RATING_MINUS, element: value });
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
		clearForm,
		counterPlusRating,
		counterMinusRating,
	};
};
