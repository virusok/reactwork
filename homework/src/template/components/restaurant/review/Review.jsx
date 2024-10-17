import style from "./style.module.css";
import { ReviewItem } from "../reviewItem/ReviewItem";
import { ReviewForm } from "../../reviewform/ReviewForm";
import { useUser } from "../../themeProviders/userContext/useUser";

export const Review = ({ reviewId }) => {
	const { auth } = useUser();
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
			{auth === "" ? "" : <ReviewForm />}
		</>
	);
};
