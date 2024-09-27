export const Tabmenu = ({ tabElements, tabSelector, tabActive }) => {
	return tabElements.map((element) => {
		return (
			<button
				className={
					element.id == tabActive ? "restorane-name active" : "restorane-name"
				}
				onClick={() => tabSelector(element.id)}
			>
				{element.name}
			</button>
		);
	});
};
