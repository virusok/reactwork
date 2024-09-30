import { useState } from "react";
import { Counter } from "../../counter/Counter";

export const Menu = ({ menuItem }) => {
	let [value, setValue] = useState(0);

	return (
		<li>
			{menuItem.name} <Counter value={value} setValue={setValue} />
		</li>
	);
};
