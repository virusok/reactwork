import { useState } from "react";
import { restaurants } from "/database/mock";
import { Layout } from "./layout/Layout";
import { Restaurant } from "./restaurant/Restaurant";
import { Tabmenu } from "./tabmenu/Tabmenu";
export const App = () => {
	const firstTab = restaurants[0].id;
	const [activeTab, setTab] = useState(firstTab);
	const selectedRestaurant = restaurants.find(({ id }) => {
		return id === activeTab;
	});
	const tabHandleClick = (selectedTab) => {
		setTab(selectedTab);
	};
	return (
		<Layout>
			<div className='restorane-names'>
				<Tabmenu
					tabActive={activeTab}
					tabElements={restaurants}
					tabSelector={tabHandleClick}
				/>
			</div>
			<Restaurant restaurant={selectedRestaurant} />
		</Layout>
	);
};
