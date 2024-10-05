import { useState } from "react";
import { Menu } from "./menu/Menu";
import { Review } from "./review/Review";
import { ReviewForm } from "../reviewform/ReviewForm";
import { Tabmenu } from "../tabmenu/Tabmenu";
<<<<<<< HEAD
import style from "./style.module.css";
=======

>>>>>>> main
export const Restaurant = ({ restaurant }) => {
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
<<<<<<< HEAD
			<div className={style.restoraneNames}>
=======
			<div className='restorane-names'>
>>>>>>> main
				<Tabmenu
					tabActive={activeTab}
					tabElements={restaurant}
					tabSelector={tabHandleClick}
				/>
			</div>
<<<<<<< HEAD
			<div className={style.restoraneItem}>
=======
			<div className='restorane-item'>
>>>>>>> main
				<Menu key={selectedRestaurant.id} menu={selectedRestaurant.menu} />
				<Review reviews={selectedRestaurant.reviews} />
				<ReviewForm />
			</div>
		</>
	);
};
