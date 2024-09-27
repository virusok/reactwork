import { useState } from "react";
import { restaurants } from "/database/mock";
import { Layout } from "./layout/Layout";
import { Restorane } from "./restorane/Restorane";
import { Tabmenu } from "./tabmenu/Tabmenu";
export const App = () => {
	const startTabItem = restaurants[0].id;
	const [activeTab, setNewTab] = useState(startTabItem);
	const restorane = restaurants.filter((restorane) => {
		return restorane.id === activeTab;
	});
	const handleClick = (selectedItem) => {
		setNewTab(selectedItem);
	};
	return (
		<Layout>
			<div className="restorane-names">
				<Tabmenu
					tabActive={activeTab}
					tabElements={restaurants}
					tabSelector={handleClick}
				/>
			</div>
			<Restorane restorane={restorane} />
		</Layout>
	);
};
