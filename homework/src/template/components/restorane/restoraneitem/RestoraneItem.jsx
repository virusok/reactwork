import { Menu } from "../menu/Menu";
import { Review } from "../review/Review";
export const RestoraneItem = ({ menu, reviews }) => {
	return (
		<div className='restorane-item'>
			<h3>Меню ресторана</h3>
			<ul className='restorane-catalog'>
				{menu.length ? (
					menu.map((menu) => <Menu menuItem={menu.name} />)
				) : (
					<li>{"У ресторана нет меню."}</li>
				)}
			</ul>
			<h3>Отзывы</h3>
			<ul className='restorane-reviews'>
				{reviews.length ? (
					reviews.map((reviews) => <Review reviewItem={reviews.text} />)
				) : (
					<li>{"У ресторана нет отзывов."}</li>
				)}
			</ul>
		</div>
	);
};
