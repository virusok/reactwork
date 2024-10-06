import style from "./style.module.css";
import classnames from "classnames";
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
				className={classnames(style.counter, style.counterPlus)}
			>
				+
			</button>
			<span className={style.counterValue}>{value}</span>
			<button
				onClick={counterMinus}
				className={classnames(style.counter, style.counterMinus)}
			>
				-
			</button>
		</div>
	);
};
