<<<<<<< HEAD
import style from "./style.module.css";

=======
>>>>>>> main
export const Review = ({ reviews }) => {
	return (
		<>
			<h3>Отзывы</h3>
			{reviews.length ? (
<<<<<<< HEAD
				<ul className={style.restoraneReviews}>
=======
				<ul className='restorane-reviews'>
>>>>>>> main
					{reviews.map((review, index) => (
						<li key={index}>{review.text}</li>
					))}
				</ul>
			) : (
				"У ресторана нет отзывов."
			)}
		</>
	);
};
