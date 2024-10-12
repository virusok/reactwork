import { Layout } from "./layout/Layout";
import { RestaurantPage } from "./restaurantPage/restaurantPage";
import { ThemeProvider } from "./themeProviders/themeContext/themeContext";
import { UserProvider } from "./themeProviders/userContext/userContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";
export const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<UserProvider>
					<Layout>
						<RestaurantPage />
					</Layout>
				</UserProvider>
			</ThemeProvider>
		</Provider>
	);
};
