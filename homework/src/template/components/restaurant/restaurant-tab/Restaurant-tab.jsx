import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/restaurants";
import { ThemeButtons } from "../../themeButtons/ThemeButtons";
import style from "./style.module.css";
export const RestaurantTab = ({ id }) => {
	const restaurant = useSelector((state) => selectRestaurantById(state, id));

	return (
		<ThemeButtons
			link={id}
			text={restaurant.name}
			styles={style.selectRestaurant}
		/>
	);
};
