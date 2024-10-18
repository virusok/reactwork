import { MenuItem } from "../menuItem/menuItem";
import style from "./style.module.css";

export const Menu = ({ menuIds }) => {
	return (
		<>
			<h3>Меню ресторана</h3>
			{menuIds.length ? (
				<ul className={style.restoraneCatalog}>
					{menuIds.map((id) => (
						<MenuItem key={id} id={id} />
					))}
				</ul>
			) : (
				"У ресторана нет меню."
			)}
		</>
	);
};
