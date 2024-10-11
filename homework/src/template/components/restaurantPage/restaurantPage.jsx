import style from "./style.module.css";
import { useState } from "react";
import { Tabmenu } from "../tabmenu/Tabmenu";
import { selectRestaurantIds } from "../../redux/restaurant";
import { useSelector } from "react-redux";
import { Restaurant } from "../restaurant/Restaurant";
export const RestaurantPage = () => {
	const restaurantIds = useSelector(selectRestaurantIds);

	const [activeRestoraneId, setRestoraneId] = useState(restaurantIds[0]);

	const tabHandleClick = (id) => {
		if (activeRestoraneId != id) {
			setRestoraneId(id);
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
							tabActive={activeRestoraneId}
							tabSelector={tabHandleClick}
						/>
					);
				})}
			</div>
			<Restaurant id={activeRestoraneId} key={activeRestoraneId} />
		</>
	);
};
