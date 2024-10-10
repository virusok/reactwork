import style from "./style.module.css";
import { ReviewItem } from "../reviewItem/ReviewItem";

export const Review = ({ reviewId }) => {
	return (
		<>
			<h3>Отзывы</h3>
			{reviewId.length ? (
				<ul className={style.restoraneReviews}>
					{reviewId.map((id) => (
						<ReviewItem key={id} id={id} />
					))}
				</ul>
			) : (
				"У ресторана нет отзывов."
			)}
		</>
	);
};
