import style from "./style.module.css";
import { Button } from "../Button/Button";
export const Tabmenu = ({ tabElements, tabSelector, tabActive }) => {
	return tabElements.map((element) => {
		return (
			<>
				<Button
					isActive={tabActive === element.id}
					text={element.name}
					onClick={() => tabSelector(element.id)}
					className={style.btnMargin}
				/>
			</>
		);
	});
};
