import { MenuItem } from "../menuItem/MenuItem";
<<<<<<< HEAD
import style from "./style.module.css";
=======
>>>>>>> main
export const Menu = ({ menu }) => {
	return (
		<>
			<h3>Меню ресторана</h3>
			{menu.length ? (
<<<<<<< HEAD
				<ul className={style.restoraneCatalog}>
=======
				<ul className='restorane-catalog'>
>>>>>>> main
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
