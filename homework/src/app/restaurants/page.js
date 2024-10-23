"use client";
import { Outlet } from "react-router-dom";
import { RestaurantTab } from "../../template/components/restaurant/restaurant-tab/Restaurant-tab.jsx";
import style from "./style.module.css";
import { Preloader } from "../../template/components/preloader/Preloader.jsx";
import { useGetRestaurantsQuery } from "../../template/redux/services/api/api.js";

export default function Page() {
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
}
