import { useState } from "react";
import { Counter } from "../../counter/Counter";

export const MenuItem = ({ menuItem, index }) => {
	const [value, setValue] = useState(0);

	return (
		<li key={index}>
			{menuItem} <Counter value={value} setValue={setValue} />
		</li>
	);
};
