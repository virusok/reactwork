import { useForm } from "./useForm";
import { Counter } from "../counter/Counter";
import style from "./style.module.css";
export const ReviewForm = () => {
	const {
		userName,
		reviewText,
		rating,
		setName,
		setReview,
		clearForm,
		counterPlusRating,
		counterMinusRating,
	} = useForm();

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
					value={userName}
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
		</form>
	);
};
