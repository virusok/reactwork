import { Outlet } from "react-router-dom";
import { RestaurantTab } from "../../components/restaurant/restaurant-tab/Restaurant-tab";

import style from "./style.module.css";

import { Preloader } from "../../components/preloader/Preloader";
import { useGetRestaurantsQuery } from "../../redux/services/api/api.js";

export const CategoryRestaurants = () => {
	const { data, isLoading, isError } = useGetRestaurantsQuery();

	if (isLoading) {
		return <Preloader />;
	}
	if (isError) {
		return `<div>Error data loading</div>`;
	}
	if (!data?.length) {
		return null;
	}

	return (
		<>
			<div className={style.restoraneNames}>
				{data.map(({ id, name }) => (
					<RestaurantTab key={id} id={id} name={name} />
				))}
			</div>
			<Outlet />
		</>
	);
};
