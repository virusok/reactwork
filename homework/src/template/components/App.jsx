import { ThemeProvider } from "./themeProviders/themeContext/themeContext";
import { UserProvider } from "./themeProviders/userContext/userContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { HomePage } from "../pages/Home/Home";
import { CategoryRestaurants } from "../pages/category-restaurants/Category-Restaurants";
import { RestaurantPage } from "../pages/restaurant/Restaurant";
import { MenuPage } from "../pages/restaurant/menu/Menu";
import { ReviewsPage } from "../pages/restaurant/reviews/Reviews";
import { DishPage } from "../pages/Dish/Dish";
import { Page404 } from "../pages/404/404";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "restaurants",
				element: <CategoryRestaurants />,
				children: [
					{
						path: ":restaurantId",
						element: <RestaurantPage />,
						children: [
							{
								path: "menu",
								element: <MenuPage />,
							},
							{
								path: "reviews",
								element: <ReviewsPage />,
							},
						],
					},
				],
			},
			{
				path: "dish/:dishId",
				element: <DishPage />,
			},
			{
				path: "*",
				element: <Page404 />,
			},
		],
	},
]);
export const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<UserProvider>
					<RouterProvider router={router} />
				</UserProvider>
			</ThemeProvider>
		</Provider>
	);
};
