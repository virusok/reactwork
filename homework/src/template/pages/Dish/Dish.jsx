import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";
import { useUser } from "../../components/themeProviders/userContext/useUser";
import { DishCounter } from "../../components/restaurant/dishCounter/DishCounter";
import style from "./style.module.css";
export const DishPage = () => {
	const { dishId } = useParams();
	const { auth } = useUser();
	const dish = useSelector((state) => selectDishById(state, dishId));
	const { name, price, ingredients } = dish;
	return (
		<div className={style.dishPage}>
			<h1>{name}</h1>

			<div className={style.dishPrice}>
				<span className={style.dishPriceDescription}>Цена:</span>
				<span className={style.dishPricePrice}>{price}</span>
				<span className={style.dishPriceValute}>TON</span>
			</div>
			<div className={style.dishCounter}>
				{auth === "" ? "" : <DishCounter id={dishId} />}
			</div>
			<h2>Ингридиенты</h2>
			<ul className={style.dishIngredients}>
				{ingredients.map((element) => (
					<li>{element}</li>
				))}
			</ul>
		</div>
	);
};
