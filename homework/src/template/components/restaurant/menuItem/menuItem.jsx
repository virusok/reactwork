import { useUser } from "../../themeProviders/userContext/useUser";
import { DishCounter } from "../dishCounter/DishCounter";
import { ThemeButtons } from "../../themeButtons/ThemeButtons";

import { getDishes } from "../../../redux/dishes/getDishes";
import { selectDishById, selectDishRequestStatus } from "../../../redux/dishes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Preloader } from "../../preloader/Preloader";
import { IDLE, PENDING } from "../../../redux/dataStatus";
export const MenuItem = ({ id }) => {
	const { auth } = useUser();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDishes(id));
	}, [dispatch, id]);

	const dish = useSelector((state) => selectDishById(state, id));

	const requestStatus = useSelector(selectDishRequestStatus);

	if (requestStatus === IDLE || requestStatus === PENDING) {
		return <Preloader />;
	}

	return (
		<li>
			<ThemeButtons link={`/dish/${id}`} text={dish.name} />
			{auth === "" ? null : <DishCounter id={id} />}
		</li>
	);
};
