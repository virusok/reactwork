import { Counter } from "../../counter/Counter";

export const Menu = ({ menuItem }) => {
	return (
		<li>
			{menuItem} <Counter />
		</li>
	);
};
