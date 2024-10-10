import { MenuItem } from "../menuItem/MenuItem";
import style from "./style.module.css";

export const Menu = ({ menuId }) => {
	return (
		<>
			<h3>Меню ресторана</h3>
			{menuId.length ? (
				<ul className={style.restoraneCatalog}>
					{menuId.map((id) => (
						<MenuItem key={id} id={id} />
					))}
				</ul>
			) : (
				"У ресторана нет меню."
			)}
		</>
	);
};
