import { MenuItem } from "../menuItem/MenuItem";
export const Menu = ({ menu }) => {
	return (
		<>
			<h3>Меню ресторана</h3>
			{menu.length ? (
				<ul className='restorane-catalog'>
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
