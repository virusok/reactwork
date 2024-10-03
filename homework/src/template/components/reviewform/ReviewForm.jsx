import { useForm } from "./useForm";
import { Counter } from "../counter/Counter";
import style from "./style.module.css";
export const ReviewForm = (props) => {
	const {
		userName,
		reviewText,
		rating,
		setRating,
		setName,
		setReview,
		clearForm,
	} = useForm();

	return (
		<form action='#' className={style.form}>
			<div className={style.form_input}>
				<label>Ваше имя</label>
				<input
					type='text'
					value={userName}
					onChange={(event) => setName(event.target.value)}
				/>
			</div>
			<div className={style.form_input}>
				<label>Ваш отзыв</label>
				<input
					type='text'
					value={reviewText}
					onChange={(event) => setReview(event.target.value)}
				/>
			</div>
			<div className={style.form_rating}>
				<span className={style.form_rating_title}>Ваша оценка ресторану</span>
				<Counter value={rating} setValue={setRating} />
			</div>
			<button onClick={clearForm} className={style.form_clear}>
				Очистить
			</button>
		</form>
	);
};
