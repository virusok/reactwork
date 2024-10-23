import style from "./style.module.css";
import { Button } from "../Button/Button";
export const Tabmenu = ({ title, tabSelector, tabActive }) => {
	return (
		<>
			<Button
				isActive={tabActive}
				text={title}
				onClick={tabSelector}
				className={style.btnMargin}
			/>
		</>
	);
};
