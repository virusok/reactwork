import { Menu } from "../menu/Menu";
import { Review } from "../review/Review";
export const RestoraneItem = ({ restorane }) => {
	return (
		<div className='restorane-item'>
			<h3>Меню ресторана</h3>
			{restorane.menu.length ? (
				<ul className='restorane-catalog'>
					{restorane.menu.map((menu) => (
						<Menu menuItem={menu.name} />
					))}
				</ul>
			) : (
				"У ресторана нет меню."
			)}
			<h3>Отзывы</h3>
			{restorane.reviews.length ? (
				<ul className='restorane-reviews'>
					{restorane.reviews.map((reviews) => (
						<Review reviewItem={reviews.text} />
					))}
				</ul>
			) : (
				"У ресторана нет отзывов."
			)}
		</div>
	);
};
