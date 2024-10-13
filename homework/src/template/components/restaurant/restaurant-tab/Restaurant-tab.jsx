import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/restaurant";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import classNames from "classnames";
import { useTheme } from "../../themeProviders/themeContext/useTheme";
export const RestaurantTab = ({ id }) => {
	const { theme } = useTheme();
	const restaurant = useSelector((state) => selectRestaurantById(state, id));
	return (
		<NavLink
			to={id}
			className={classNames(style.restaurantTab, {
				[style.dark]: theme === "dark",
				[style.white]: theme === "white",
			})}
		>
			{restaurant.name}
		</NavLink>
	);
};
