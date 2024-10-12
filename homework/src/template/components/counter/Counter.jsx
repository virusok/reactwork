import style from "./style.module.css";
import classnames from "classnames";
import { Button } from "../Button/Button";
export const Counter = ({ value, counterPlus, counterMinus }) => {
	return (
		<div className={style.counters}>
			<Button
				onClick={counterPlus}
				className={classnames(style.counter, style.counterPlus)}
				text='+'
			/>
			<span className={style.counterValue}>{value}</span>
			<Button
				onClick={counterMinus}
				className={classnames(style.counter, style.counterMinus)}
				text='-'
			/>
		</div>
	);
};
