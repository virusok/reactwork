"use client";
import { useGetRestaurantMenuQuery } from "../../../../../template/redux/services/api/api";
import { MenuItem } from "../../../../../template/components/restaurant/menuItem/menuItem";
import { Preloader } from "../../../../../template/components/preloader/Preloader";
import { useParams } from "next/navigation";

import style from "./style.module.css";

export default function RestaurantMenu() {
	const { restaurantId } = useParams();

	const { data, isLoading, isError, isFetching } = useGetRestaurantMenuQuery({
		restaurantId,
	});

	if (isLoading || isFetching) {
		return <Preloader />;
	}
	if (isError) {
		return `Error data loading`;
	}

	return (
		<>
			<h3>Меню ресторана</h3>
			{data.length ? (
				<ul className={style.restoraneCatalog}>
					{data.map(({ id, name }) => (
						<MenuItem key={id} id={id} name={name} />
					))}
				</ul>
			) : (
				"У ресторана нет меню."
			)}
		</>
	);
}
