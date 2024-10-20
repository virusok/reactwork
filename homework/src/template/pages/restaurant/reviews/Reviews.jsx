import { useParams } from "react-router-dom";
import { useUser } from "../../../components/themeProviders/userContext/useUser";
import { ReviewForm } from "../../../components/reviewform/ReviewForm";
import { ReviewItem } from "../../../components/restaurant/reviewItem/ReviewItem";

export const ReviewsPage = () => {
	const { restaurantId } = useParams();
	const { auth } = useUser();

	return (
		<>
			<h3>Отзывы</h3>
			<ReviewItem restaurantId={restaurantId} />
			{auth === null ? null : <ReviewForm restaurantId={restaurantId} />}
		</>
	);
};
