import { Layout } from "./layout/Layout";
import { restaurants } from "/database/mock";
import { Restaurant } from "./restaurant/Restaurant";
import { ThemeProvider } from "./themeProviders/themeContext/themeContext";
import { UserProvider } from "./themeProviders/userContext/userContext";
export const App = () => {
	return (
		<ThemeProvider>
			<UserProvider>
				<Layout>
					<Restaurant restaurant={restaurants} />
				</Layout>
			</UserProvider>
		</ThemeProvider>
	);
};
