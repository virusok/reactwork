import { useParams } from "react-router-dom";
import { Restaurant } from "../../components/restaurant/Restaurant";

export const RestaurantPage = () => {
	const { restaurantId } = useParams();

	return <Restaurant restaurantId={restaurantId} />;
};
