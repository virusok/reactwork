import { useUser } from "../../themeProviders/userContext/useUser";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/dishes";
import { DishCounter } from "../dishCounter/DishCounter";
import { ThemeButtons } from "../../themeButtons/ThemeButtons";
export const MenuItem = ({ id }) => {
	const dish = useSelector((state) => selectDishById(state, id));
	const { auth } = useUser();

	return (
		<li>
			<ThemeButtons link={`/dish/${id}`} text={dish.name} />
			{auth === "" ? null : <DishCounter id={id} />}
		</li>
	);
};
