export const Counter = ({ value, setValue }) => {
	const counterPlus = () => {
		setValue(value + 1);
	};

	const counterMinus = () => {
		setValue(value - 1);
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
