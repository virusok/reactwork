import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Restaurant } from "../../components/restaurant/Restaurant";
import { selectRestaurantById } from "../../redux/restaurants";
import { useSelector } from "react-redux";
export const RestaurantPage = () => {
	const { restaurantId } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		navigate("menu");
	}, [navigate, restaurantId]);

	const restaurant = useSelector((state) =>
		selectRestaurantById(state, restaurantId)
	);

	return <Restaurant restaurant={restaurant} />;
};
