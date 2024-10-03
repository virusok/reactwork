import { Menu } from "../menu/Menu";
import { Review } from "../review/Review";
import { ReviewForm } from "../../reviewform/ReviewForm";
import style from "./style.module.css";
export const RestaurantItem = ({ restaurant }) => {
	return (
		<div className={style.restorane_item}>
			<h3>Меню ресторана</h3>
			{restaurant.menu.length ? (
				<ul className={style.restorane_catalog}>
					{restaurant.menu.map((menu) => (
						<Menu menuItem={menu} />
					))}
				</ul>
			) : (
				"У ресторана нет меню."
			)}
			<h3>Отзывы</h3>
			{restaurant.reviews.length ? (
				<ul className={style.restorane_reviews}>
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
