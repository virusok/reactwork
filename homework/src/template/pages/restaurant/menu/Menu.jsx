import { Menu } from "../../../components/restaurant/menu/Menu";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
	selectDishesIds,
	selectDishRequestStatus,
} from "../../../redux/dishes";
import { useDispatch, useSelector } from "react-redux";
import { getDishes } from "../../../redux/dishes/getDishes";
import { Preloader } from "../../../components/preloader/Preloader";
import { IDLE, PENDING } from "../../../redux/dataStatus";
export const MenuPage = () => {
	const { restaurantId } = useParams();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDishes(restaurantId));
	}, [dispatch, restaurantId]);

	const restaurantMenuIds = useSelector((state) =>
		selectDishesIds(state, restaurantId)
	);
	const requestStatus = useSelector(selectDishRequestStatus);
	if (requestStatus === IDLE || requestStatus === PENDING) {
		return <Preloader />;
	}
	return <Menu menuIds={restaurantMenuIds} />;
};
