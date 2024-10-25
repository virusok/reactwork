import { useForm } from "./useForm";
import { Counter } from "../counter/Counter";
import style from "./style.module.css";
import {
	useAddReviewMutation,
	useEditReviewMutation,
} from "../../redux/services/api/api";
import { useContext, useEffect } from "react";
import { UserContext } from "../themeProviders/userContext";

export const ReviewForm = ({
	restaurantId,
	isEdit,
	data,
	disableEdit,
	refetch,
	usrData,
}) => {
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
	const [editReview] = useEditReviewMutation();

	useEffect(() => {
		if (isEdit !== null && data) {
			if (data.userId != userId) {
				const userOnUserBase = usrData.find(({ id }) => id == data.userId);
				setName(userOnUserBase.name);
			} else {
				setName(data.userName);
			}

			setReview(data.text);
		} else {
			setName(userName);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, userName, isEdit]);

	return (
		<form
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
					onChange={(event) => setName(event.target.value)}
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
				onClick={() => {
					isEdit === null
						? addReview({
								restaurantId,
								review: {
									userId,
									userName: nameForForm,
									text: reviewText,
									rating,
								},
							})
						: editReview({
								reviewId: data.id,
								newReview: {
									userName: nameForForm,
									text: reviewText,
									rating,
								},
							}).then(() => {
								disableEdit();
								refetch();
							});
				}}
			>
				Отправить
			</button>
		</form>
	);
};
