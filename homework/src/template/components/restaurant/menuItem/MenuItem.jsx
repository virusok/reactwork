import { useUser } from "../../themeProviders/userContext/useUser";
import { useSelector } from "react-redux";
import { selectDishesById } from "../../../redux/dishes";
import { DishCounter } from "../dishCounter/DishCounter";
export const MenuItem = ({ id }) => {
	const dish = useSelector((state) => selectDishesById(state, id));

	const { auth } = useUser();

	return (
		<li>
			{dish.name}
			{auth === "" ? "" : <DishCounter id={id} />}
		</li>
	);
};
