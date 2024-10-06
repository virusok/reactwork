import { Layout } from "./layout/Layout";
import { restaurants } from "/database/mock";
import { Restaurant } from "./restaurant/Restaurant";
import { ButtonsProvider } from "./themeContext/buttonsContext/buttonsContext";
import { UserProvider } from "./themeContext/userContext/userContext";
export const App = () => {
	return (
		<ButtonsProvider>
			<UserProvider>
				<Layout>
					<Restaurant restaurant={restaurants} />
				</Layout>
			</UserProvider>
		</ButtonsProvider>
	);
};
