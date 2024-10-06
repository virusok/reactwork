import { useState } from "react";
import { Menu } from "./menu/Menu";
import { Review } from "./review/Review";
import { ReviewForm } from "../reviewform/ReviewForm";
import { Tabmenu } from "../tabmenu/Tabmenu";
import { useUser } from "../themeProviders/userContext/useUser";
import style from "./style.module.css";
export const Restaurant = ({ restaurant }) => {
	const { auth } = useUser();
	const firstTab = restaurant[0].id;
	const [activeTab, setTab] = useState(firstTab);
	const selectedRestaurant = restaurant.find(({ id }) => {
		return id === activeTab;
	});
	const tabHandleClick = (selectedTab) => {
		setTab(selectedTab);
	};
	return (
		<>
			<div className={style.restoraneNames}>
				<Tabmenu
					tabActive={activeTab}
					tabElements={restaurant}
					tabSelector={tabHandleClick}
				/>
			</div>
			<div className={style.restoraneItem}>
				<Menu key={selectedRestaurant.id} menu={selectedRestaurant.menu} />
				<Review reviews={selectedRestaurant.reviews} />
				{auth === "" ? "" : <ReviewForm />}
			</div>
		</>
	);
};
