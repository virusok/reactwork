import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectDishById,
	selectDishForPageRequestStatus,
} from "../../redux/dishes";
import { useUser } from "../../components/themeProviders/userContext/useUser";
import { DishCounter } from "../../components/restaurant/dishCounter/DishCounter";
import style from "./style.module.css";

import { useEffect } from "react";
import { getDish } from "../../redux/dishes/getDish";
import { Preloader } from "../../components/preloader/Preloader";
import { PENDING, IDLE } from "../../redux/dataStatus";
export const DishPage = () => {
	const { dishId } = useParams();
	const { auth } = useUser();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDish(dishId));
	}, [dispatch, dishId]);

	const dish = useSelector((state) => selectDishById(state, dishId));

	const requestStatus = useSelector(selectDishForPageRequestStatus);

	if (requestStatus === IDLE || requestStatus === PENDING) {
		return <Preloader />;
	}
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
				{auth === "" ? null : <DishCounter id={dishId} />}
			</div>
			<h2>Ингридиенты</h2>
			<ul className={style.dishIngredients}>
				{ingredients.map((element, id) => (
					<li key={id}>{element}</li>
				))}
			</ul>
		</div>
	);
};
