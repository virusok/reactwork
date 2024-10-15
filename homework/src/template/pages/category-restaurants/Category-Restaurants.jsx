import { Outlet } from "react-router-dom";
import { RestaurantTab } from "../../components/restaurant/restaurant-tab/Restaurant-tab";
import { selectRestaurantIds } from "../../redux/restaurant";
import { useSelector } from "react-redux";
import style from "./style.module.css";
export const CategoryRestaurants = () => {
	const restaurantsIds = useSelector(selectRestaurantIds);

	return (
		<>
			<div className={style.restoraneNames}>
				{restaurantsIds.map((id) => (
					<RestaurantTab id={id} key={id} />
				))}
			</div>
			<Outlet />
		</>
	);
};
