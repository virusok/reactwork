import { ThemeButtons } from "../../themeButtons/ThemeButtons";
import style from "./style.module.css";
export const RestaurantTab = ({ id, name }) => {
	return <ThemeButtons link={id} text={name} styles={style.selectRestaurant} />;
};
