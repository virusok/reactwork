import { RestaurantItem } from "./restaurantitem/RestaurantItem";
import style from "./style.module.css";

export const Restaurant = ({ restaurant }) => {
	return (
		<div className={style.restorane_list}>
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
		</div>
	);
};
