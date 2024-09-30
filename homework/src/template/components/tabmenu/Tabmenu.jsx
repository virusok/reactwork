import style from "./style.module.css";
export const Tabmenu = ({ tabElements, tabSelector, tabActive }) => {
	return tabElements.map((element) => {
		return (
			<button
				className={
					element.id == tabActive
						? `${style.restorane_name} ${style.active}`
						: style.restorane_name
				}
				onClick={() => tabSelector(element.id)}
			>
				{element.name}
			</button>
		);
	});
};
