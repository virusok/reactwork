import { Outlet } from "react-router-dom";
import { RestaurantTab } from "../../components/restaurant/restaurant-tab/Restaurant-tab";
import {
	selectRestaurantIds,
	selectRestaurantsRequestStatus,
} from "../../redux/restaurants";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { getRestaurants } from "../../redux/restaurants/getRestaurants";
import { useEffect } from "react";
import { Preloader } from "../../components/preloader/Preloader";
import { IDLE, PENDING } from "../../redux/dataStatus";

export const CategoryRestaurants = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRestaurants());
	}, [dispatch]);

	const restaurantsIds = useSelector(selectRestaurantIds);
	const requestStatus = useSelector(selectRestaurantsRequestStatus);

	if (requestStatus === IDLE || requestStatus === PENDING) {
		return <Preloader />;
	}
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
