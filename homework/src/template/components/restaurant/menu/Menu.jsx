import { MenuItem } from "../menuItem/MenuItem";
import style from "./style.module.css";
export const Menu = ({ menu }) => {
	return (
		<>
			<h3>Меню ресторана</h3>
			{menu.length ? (
				<ul className={style.restoraneCatalog}>
					{menu.map((menu, index) => (
						<MenuItem key={index} menuItem={menu.name} />
					))}
				</ul>
			) : (
				"У ресторана нет меню."
			)}
		</>
	);
};
