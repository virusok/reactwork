import { useForm } from "./useForm";
import { Counter } from "../counter/Counter";
import style from "./style.module.css";
import { useAddReviewMutation } from "../../redux/services/api/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../themeProviders/userContext";
export const ReviewForm = ({ restaurantId }) => {
	const {
		nameForForm,
		reviewText,
		rating,
		setName,
		setReview,
		clearForm,
		counterPlusRating,
		counterMinusRating,
	} = useForm();

	const { auth } = useContext(UserContext);
	const { userId, userName } = auth;
	const [addReview] = useAddReviewMutation();

	useEffect(() => {
		setName(userName);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userName]);
	return (
		<form
			action='#'
			className={style.form}
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<div className={style.formInput}>
				<label>Ваше имя</label>
				<input
					type='text'
					value={nameForForm}
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
			</div>
			<div className={style.formInput}>
				<label>Ваш отзыв</label>
				<input
					type='text'
					value={reviewText}
					onChange={(event) => setReview(event.target.value)}
				/>
			</div>
			<div className={style.formRating}>
				<span className={style.form_ratingTitle}>Ваша оценка ресторану</span>
				<Counter
					value={rating}
					counterPlus={counterPlusRating}
					counterMinus={counterMinusRating}
				/>
			</div>
			<button onClick={clearForm} className={style.formClear}>
				Очистить
			</button>

			<button
				onClick={() =>
					addReview({
						restaurantId,
						review: {
							userId: userId,
							userName: nameForForm,
							text: reviewText,
							rating,
						},
					})
				}
			>
				Отправить
			</button>
		</form>
	);
};
