import { useState } from "react";

export const MenuCounter = () => {
	let [value, setValue] = useState(0);

	const counterPlus = () => {
		setValue(value + 1);
	};
	const counterMinus = () => {
		value != 0 ? setValue(value - 1) : value;
	};

	return (
		<div className='counters'>
			<button onClick={counterPlus} className='counter counter-plus'>
				+
			</button>
			<span className='counter-value'>{value}</span>
			<button onClick={counterMinus} className='counter counter-minus'>
				-
			</button>
		</div>
	);
};
