import style from "./style.module.css";
import classnames from "classnames/bind";
const cs = classnames.bind(style);
export const Tabmenu = ({ tabElements, tabSelector, tabActive }) => {
	return tabElements.map((element) => {
		const tabClasses = cs("restoraneName", {
			active: tabActive === element.id,
		});
		return (
			<button
				className={classnames(tabClasses)}
				onClick={() => tabSelector(element.id)}
			>
				{element.name}
			</button>
		);
	});
};
