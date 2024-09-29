import { UseForm } from "./UseForm";
import { Counter } from "../counter/Counter";

export const ReviewForm = (props) => {
	const {
		userName,
		reviewText,
		rating,
		setRating,
		setName,
		setReview,
		clearForm,
	} = UseForm();

	return (
		<form action='#' className='form'>
			<div className='form-input'>
				<label>Ваше имя</label>
				<input
					type='text'
					value={userName}
					onChange={(event) => setName(event.target.value)}
				/>
			</div>
			<div className='form-input'>
				<label>Ваш отзыв</label>
				<input
					type='text'
					value={reviewText}
					onChange={(event) => setReview(event.target.value)}
				/>
			</div>
			<div className='form-rating'>
				<span>Ваша оценка ресторану</span>
				<Counter value={rating} setValue={setRating} />
			</div>
			<button onClick={clearForm} className='form-clear'>
				Очистить
			</button>
		</form>
	);
};
