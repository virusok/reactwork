import { useParams } from "react-router-dom";
import { Preloader } from "../../components/preloader/Preloader";
import { useUser } from "../../components/themeProviders/userContext/useUser";
import { DishCounter } from "../../components/restaurant/dishCounter/DishCounter";
import { useGetDishQuery } from "../../redux/services/api/api";

import style from "./style.module.css";

export const DishPage = () => {
	const { dishId } = useParams();
	const { auth } = useUser();
	const { data, isLoading, isError, isFetching } = useGetDishQuery({ dishId });

	if (isLoading || isFetching) {
		return <Preloader />;
	}
	if (isError) {
		return `Error data loading`;
	}

	return (
		<div className={style.dishPage}>
			<h1>{data.name}</h1>

			<div className={style.dishPrice}>
				<span className={style.dishPriceDescription}>Цена:</span>
				<span className={style.dishPricePrice}>{data.price}</span>
				<span className={style.dishPriceValute}>TON</span>
			</div>
			<div className={style.dishCounter}>
				{auth === "" ? null : <DishCounter id={data.id} />}
			</div>
			<h2>Ингридиенты</h2>
			<ul className={style.dishIngredients}>
				{data.ingredients.map((element, id) => (
					<li key={id}>{element}</li>
				))}
			</ul>
		</div>
	);
};
