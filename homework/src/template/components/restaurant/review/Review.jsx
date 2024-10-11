import style from "./style.module.css";
import { ReviewItem } from "../reviewItem/ReviewItem";

export const Review = ({ reviewsId }) => {
	return (
		<>
			<h3>Отзывы</h3>
			{reviewsId.length ? (
				<ul className={style.restoraneReviews}>
					{reviewsId.map((id) => (
						<ReviewItem key={id} id={id} />
					))}
				</ul>
			) : (
				"У ресторана нет отзывов."
			)}
		</>
	);
};
