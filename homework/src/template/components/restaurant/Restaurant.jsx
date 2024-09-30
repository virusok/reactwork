import { RestaurantItem } from "./restaurantitem/RestaurantItem";
export const Restaurant = ({ restaurant }) => {
	return (
		<div className='restorane-list'>
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
			<RestaurantItem restaurant={restaurant} />
		</div>
	);
};
