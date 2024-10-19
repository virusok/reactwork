import style from "./style.module.css";
import { ReviewItem } from "../reviewItem/ReviewItem";
import { ReviewForm } from "../../reviewform/ReviewForm";
import { useUser } from "../../themeProviders/userContext/useUser";

export const Review = ({ reviewIds }) => {
	const { auth } = useUser();
	return (
		<>
			<h3>Отзывы</h3>
			{reviewIds.length ? (
				<ul className={style.restoraneReviews}>
					{reviewIds.map((id) => (
						<ReviewItem key={id} id={id} />
					))}
				</ul>
			) : (
				"У ресторана нет отзывов."
			)}
			{auth === null ? null : <ReviewForm />}
		</>
	);
};
