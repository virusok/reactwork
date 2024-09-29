import { useState } from "react";
import { Counter } from "../../counter/Counter";

export const Menu = ({ menuItem }) => {
	let [value, setValue] = useState(0);

	return (
		<li>
			{menuItem} <Counter value={value} setValue={setValue} />
		</li>
	);
};
