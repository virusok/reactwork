import style from "./style.module.css";
import { useState } from "react";
import { Tabmenu } from "../tabmenu/Tabmenu";
import { selectRestaurantIds } from "../../redux/restaurant";
import { useSelector } from "react-redux";
import { Restaurant } from "../restaurant/Restaurant";
export const RestaurantPage = () => {
	const restaurantIds = useSelector(selectRestaurantIds);

	const [activeRestorane, setRestorane] = useState(restaurantIds[0]);

	const tabHandleClick = (id) => {
		if (activeRestorane != id) {
			setRestorane(id);
		}
	};
	return (
		<>
			<div className={style.restoraneNames}>
				{restaurantIds.map((id) => {
					return (
						<Tabmenu
							key={id}
							id={id}
							tabActive={activeRestorane}
							tabSelector={tabHandleClick}
						/>
					);
				})}
			</div>
			<Restaurant id={activeRestorane} key={activeRestorane} />
		</>
	);
};
