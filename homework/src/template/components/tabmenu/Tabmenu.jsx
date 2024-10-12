import style from "./style.module.css";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurant";
export const Tabmenu = ({ id, tabSelector, tabActive }) => {
	const restaurant = useSelector((state) => selectRestaurantById(state, id));
	return (
		<>
			<Button
				isActive={tabActive === restaurant.id}
				text={restaurant.name}
				onClick={() => tabSelector(restaurant.id)}
				className={style.btnMargin}
			/>
		</>
	);
};
