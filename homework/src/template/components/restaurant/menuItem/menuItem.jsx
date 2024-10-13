import { useUser } from "../../themeProviders/userContext/useUser";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/dishes";
import { DishCounter } from "../dishCounter/DishCounter";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import classNames from "classnames";
import { useTheme } from "../../themeProviders/themeContext/useTheme";
export const MenuItem = ({ id }) => {
	const dish = useSelector((state) => selectDishById(state, id));
	const { theme } = useTheme();
	const { auth } = useUser();

	return (
		<li>
			<NavLink
				to={`/dish/${id}`}
				className={classNames(style.menuNavigation, {
					[style.dark]: theme === "dark",
					[style.white]: theme === "white",
				})}
			>
				{dish.name}
			</NavLink>
			{auth === "" ? "" : <DishCounter id={id} />}
		</li>
	);
};
