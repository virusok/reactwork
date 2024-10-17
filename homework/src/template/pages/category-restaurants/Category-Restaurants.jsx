import { Outlet } from "react-router-dom";
import { RestaurantTab } from "../../components/restaurant/restaurant-tab/Restaurant-tab";
import {
	selectRestaurantIds,
	selectRestaurantRequestStatus,
} from "../../redux/restaurants";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { getRestaurants } from "../../redux/restaurants/getRestaurants";
import { useEffect } from "react";
import { Preloader } from "../../components/preloader/Preloader";

export const CategoryRestaurants = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRestaurants());
	}, [dispatch]);

	const restaurantsIds = useSelector(selectRestaurantIds);
	const requestStatus = useSelector(selectRestaurantRequestStatus);

	if (requestStatus === "idle" || requestStatus === "pending") {
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
