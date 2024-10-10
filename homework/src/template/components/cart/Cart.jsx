import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart";
import { CartItem } from "../cartItem/CartItem";
import style from "./style.module.css";
import { useUser } from "../themeProviders/userContext/useUser";
export const Cart = () => {
	const items = useSelector(selectCartItems);
	const { auth } = useUser();
	if (!items.length) {
		return null;
	}
	if (!auth) {
		return null;
	}
	return (
		<ul className={style.cartList}>
			<h3>Ваш заказ</h3>
			{items.map(({ id, amount }) => (
				<li key={id}>
					<CartItem id={id} amount={amount} />
				</li>
			))}
		</ul>
	);
};
