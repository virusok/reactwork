"use client";
import { useGetRestaurantQuery } from "../../../../template/redux/services/api/api";
import { ThemeButtons } from "../../../../template/components/themeButtons/ThemeButtons";
import { Preloader } from "../../../../template/components/preloader/Preloader";
import style from "./style.module.css";
import { useParams } from "next/navigation";
export default function RestaurantPage({ children }) {
	const { restaurantId } = useParams();
	const { data, isLoading, isError, isFetching } = useGetRestaurantQuery({
		restaurantId,
	});
	if (isLoading || isFetching) {
		return <Preloader />;
	}
	if (isError) {
		return `Error data loading`;
	}
	console.log(data);
	return (
		<div className={style.restoraneItem}>
			<h1>{data.name}</h1>

			<div className={style.tabSection}>
				<ThemeButtons link={`${restaurantId}/menu`} text={"Меню ресторана"} />
				<ThemeButtons link={`${restaurantId}/reviews`} text={"Отзывы клиентов"} />
			</div>
			{children}
		</div>
	);
}
