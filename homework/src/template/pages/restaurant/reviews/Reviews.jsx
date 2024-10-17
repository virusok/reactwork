import { Review } from "../../../components/restaurant/review/Review";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../../../redux/restaurants";
import { useSelector } from "react-redux";

export const ReviewsPage = () => {
	const { restaurantId } = useParams();
	const restaurantRewiewsId = useSelector((state) =>
		selectRestaurantById(state, restaurantId)
	);
	const { reviews } = restaurantRewiewsId;

	return <Review reviewId={reviews} />;
};
