import { Menu } from "../../../components/restaurant/menu/Menu";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../../../redux/restaurant";
import { useSelector } from "react-redux";

export const MenuPage = () => {
	const { restaurantId } = useParams();
	const restaurantMenuId = useSelector((state) =>
		selectRestaurantById(state, restaurantId)
	);
	const { menu } = restaurantMenuId;

	return <Menu menuId={menu} />;
};
