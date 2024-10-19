import style from "./style.module.css";
import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
import { ThemeButtons } from "../themeButtons/ThemeButtons";
// import { selectRestaurantById } from "../../redux/restaurants";
// import { useSelector } from "react-redux";
export const Restaurant = ({ restaurant }) => {
	return (
		<>
			<div className={style.restoraneItem}>
				<h1>{restaurant.name}</h1>
				<div className={style.tabSection}>
					<ThemeButtons link={"menu"} text={"Меню ресторана"} />
					<ThemeButtons link={"reviews"} text={"Отзывы клиентов"} />
				</div>

				<Outlet />
			</div>
		</>
	);
};
