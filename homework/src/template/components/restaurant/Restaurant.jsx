import { useState } from "react";
import { Menu } from "./menu/Menu";
import { Review } from "./review/Review";
import { ReviewForm } from "../reviewform/ReviewForm";
import { Tabmenu } from "../tabmenu/Tabmenu";

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
			<div className='restorane-names'>
				<Tabmenu
					tabActive={activeTab}
					tabElements={restaurant}
					tabSelector={tabHandleClick}
				/>
			</div>
			<div className='restorane-item'>
				<Menu key={selectedRestaurant.id} menu={selectedRestaurant.menu} />
				<Review reviews={selectedRestaurant.reviews} />
				<ReviewForm />
			</div>
		</>
	);
};
