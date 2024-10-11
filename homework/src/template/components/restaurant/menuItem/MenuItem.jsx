import { useState } from "react";
import { Counter } from "../../counter/Counter";
import { useUser } from "../../themeProviders/userContext/useUser";
export const MenuItem = ({ menuItem, index }) => {
	const [value, setValue] = useState(0);
	const { auth } = useUser();
	return (
		<li key={index}>
			{menuItem} {auth === "" ? "" : <Counter value={value} setValue={setValue} />}
		</li>
	);
};
