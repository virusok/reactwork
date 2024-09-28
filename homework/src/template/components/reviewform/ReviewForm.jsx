import { UseForm } from "./UseForm";
import { Counter } from "../counter/Counter";

export const ReviewForm = (props) => {
	const {
		userName,
		reviewText,
		setName,
		setReview,
		clearRating,
		clearForm,
		RatingMinCounter,
		RatingMaxCounter,
	} = UseForm();

	return (
		<form action='#'>
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
				<Counter
					limiting={true}
					minCounter={RatingMinCounter}
					maxCounter={RatingMaxCounter}
				/>
			</div>
			<button onClick={clearForm} className='form-clear'>
				Очистить
			</button>
		</form>
	);
};
