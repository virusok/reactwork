import { useParams } from "react-router-dom";
import { useGetRestaurantQuery } from "../../redux/services/api/api";
import { Preloader } from "../../components/preloader/Preloader";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeButtons } from "../../components/themeButtons/ThemeButtons";
import style from "./style.module.css";
import { useEffect } from "react";
export const RestaurantPage = () => {
	const { restaurantId } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		navigate("menu");
	}, [navigate, restaurantId]);
	const { data, isLoading, isError, isFetching } = useGetRestaurantQuery({
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
			<div className={style.restoraneItem}>
				<h1>{data.name}</h1>

				<div className={style.tabSection}>
					<ThemeButtons link={"menu"} text={"Меню ресторана"} />
					<ThemeButtons link={"reviews"} text={"Отзывы клиентов"} />
				</div>

				<Outlet />
			</div>
		</>
	);
};
