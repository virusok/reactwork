import style from "./style.module.css";
export const Counter = ({ value, setValue }) => {
	const counterPlus = () => {
		setValue(value + 1);
	};

	const counterMinus = () => {
		value != 0 ? setValue(value - 1) : value;
	};
	return (
		<div className={style.counters}>
			<button
				onClick={counterPlus}
				className={`${style.counter} ${style.counter_plus}`}
			>
				+
			</button>
			<span className={`${style.counter_value}`}>{value}</span>
			<button
				onClick={counterMinus}
				className={`${style.counter} ${style.counter_minus}`}
			>
				-
			</button>
		</div>
	);
};
