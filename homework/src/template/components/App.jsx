import { Layout } from "./layout/Layout";
import { restaurants } from "/database/mock";
import { Restaurant } from "./restaurant/Restaurant";

export const App = () => {
	return (
		<Layout>
			<Restaurant restaurant={restaurants} />
		</Layout>
	);
};
