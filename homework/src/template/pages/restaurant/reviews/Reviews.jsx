import { useParams } from "react-router-dom";
import { ReviewItems } from "../../../components/restaurant/reviewItems/ReviewItems";

export const ReviewsPage = () => {
	const { restaurantId } = useParams();
	return (
		<>
			<h3>Отзывы</h3>
			<ReviewItems restaurantId={restaurantId} />
		</>
	);
};
