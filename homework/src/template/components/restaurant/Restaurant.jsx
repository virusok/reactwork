import style from "./style.module.css";
import { Menu } from "./menu/Menu";
import { Review } from "./review/Review";
import { ReviewForm } from "../reviewform/ReviewForm";
import { useUser } from "../themeProviders/userContext/useUser";
import { selectRestaurantById } from "../../redux/restaurant";
import { useSelector } from "react-redux";
export const Restaurant = ({ id }) => {
	const restaurant = useSelector((state) => selectRestaurantById(state, id));
	const { menu, reviews } = restaurant;
	const { auth } = useUser();

	return (
		<>
			<div className={style.restoraneItem}>
				<Menu menuId={menu} />
				<Review reviewId={reviews} />
				{auth === "" ? "" : <ReviewForm />}
			</div>
		</>
	);
};
