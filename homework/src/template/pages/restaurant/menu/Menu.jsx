import { useParams } from "react-router-dom";
import { Preloader } from "../../../components/preloader/Preloader";
import { useGetRestaurantMenuQuery } from "../../../redux/services/api/api";
import { MenuItem } from "../../../components/restaurant/menuItem/menuItem";
import style from "./style.module.css";

export const MenuPage = () => {
	const { restaurantId } = useParams();

	const { data, isLoading, isError, isFetching } = useGetRestaurantMenuQuery({
		restaurantId,
	});

	if (isLoading || isFetching) {
		return <Preloader />;
	}
	if (isError) {
		return `Error data loading`;
	}

	return (
		<>
			<h3>Меню ресторана</h3>
			{data.length ? (
				<ul className={style.restoraneCatalog}>
					{data.map(({ id, name }) => (
						<MenuItem key={id} id={id} name={name} />
					))}
				</ul>
			) : (
				"У ресторана нет меню."
			)}
		</>
	);
};
