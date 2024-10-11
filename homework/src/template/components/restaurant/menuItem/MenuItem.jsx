import { useUser } from "../../themeProviders/userContext/useUser";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/dishes";
import { DishCounter } from "../dishCounter/DishCounter";
export const MenuItem = ({ id }) => {
	const dish = useSelector((state) => selectDishById(state, id));

	const { auth } = useUser();

	return (
		<li>
			{dish.name}
			{auth === "" ? "" : <DishCounter id={id} />}
		</li>
	);
};
