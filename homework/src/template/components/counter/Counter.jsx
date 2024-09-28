import { useState } from "react";

export const Counter = (limiting) => {
	let [value, setValue] = useState(() => {
		if (limiting.limiting === true) {
			return limiting.minCounter;
		} else {
			return 0;
		}
	});
	const counterPlus = () => {
		if (limiting.limiting === true) {
			if (value < limiting.maxCounter) {
				setValue(value + 1);
			} else {
				return value;
			}
		} else {
			setValue(value + 1);
		}
	};
	const counterMinus = () => {
		if (limiting.limiting === true) {
			if (value > limiting.minCounter) {
				value != 0 ? setValue(value - 1) : value;
			} else {
				return value;
			}
		} else {
			value != 0 ? setValue(value - 1) : value;
		}
	};
	return (
		<div className='counters' value={value}>
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
