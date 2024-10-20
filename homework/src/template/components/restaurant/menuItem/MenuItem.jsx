import { useUser } from "../../themeProviders/userContext/useUser";
import { DishCounter } from "../dishCounter/DishCounter";
import { ThemeButtons } from "../../themeButtons/ThemeButtons";

export const MenuItem = ({ id, name }) => {
	const { auth } = useUser();
	return (
		<li>
			<ThemeButtons link={`/dish/${id}`} text={name} />
			{auth === null ? null : <DishCounter id={id} />}
		</li>
	);
};
