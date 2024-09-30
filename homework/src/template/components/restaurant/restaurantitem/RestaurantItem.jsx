import { Menu } from "../menu/Menu";
import { Review } from "../review/Review";
import { ReviewForm } from "../../reviewform/ReviewForm";
export const RestaurantItem = ({ restaurant }) => {
	return (
		<div className='restorane-item'>
			<h3>Меню ресторана</h3>
			{restaurant.menu.length ? (
				<ul className='restorane-catalog'>
					{restaurant.menu.map((menu) => (
						<Menu menuItem={menu} />
					))}
				</ul>
			) : (
				"У ресторана нет меню."
			)}
			<h3>Отзывы</h3>
			{restaurant.reviews.length ? (
				<ul className='restorane-reviews'>
					{restaurant.reviews.map((reviews) => (
						<Review reviewItem={reviews} />
					))}
				</ul>
			) : (
				"У ресторана нет отзывов."
			)}
			<ReviewForm />
		</div>
	);
};
