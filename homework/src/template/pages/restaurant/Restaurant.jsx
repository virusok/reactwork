import { useParams } from "react-router-dom";
import { Restaurant } from "../../components/restaurant/Restaurant";
import { selectRestaurantById } from "../../redux/restaurants";
import { useSelector } from "react-redux";

export const RestaurantPage = () => {
	const { restaurantId } = useParams();
	const restaurant = useSelector((state) =>
		selectRestaurantById(state, restaurantId)
	);
	const { name } = restaurant;

	return <Restaurant name={name} />;
};
