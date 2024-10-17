import style from "./style.module.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ThemeButtons } from "../themeButtons/ThemeButtons";
export const Restaurant = ({ name }) => {
	const { restaurantId } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		navigate("menu");
	}, [navigate, restaurantId]);
	return (
		<>
			<div className={style.restoraneItem}>
				<h1>{name}</h1>
				<div className={style.tabSection}>
					<ThemeButtons link={"menu"} text={"Меню ресторана"} />
					<ThemeButtons link={"reviews"} text={"Отзывы клиентов"} />
				</div>

				<Outlet />
			</div>
		</>
	);
};
