import style from "./style.module.css";
import classNames from "classnames";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "../themeProviders/themeContext/useTheme";
export const Restaurant = ({ name }) => {
	const { restaurantId } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		navigate("menu");
	}, [navigate, restaurantId]);
	const { theme } = useTheme();
	return (
		<>
			<div className={style.restoraneItem}>
				<h1>{name}</h1>
				<NavLink
					to='menu'
					className={classNames(style.menuNavigation, {
						[style.dark]: theme === "dark",
						[style.white]: theme === "white",
					})}
				>
					Меню ресторана
				</NavLink>
				<NavLink
					to='reviews'
					className={classNames(style.menuNavigation, {
						[style.dark]: theme === "dark",
						[style.white]: theme === "white",
					})}
				>
					Отзывы клиентов
				</NavLink>
				<Outlet />
			</div>
		</>
	);
};
