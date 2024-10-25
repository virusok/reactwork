"use client";
import { ThemeProvider } from "./themeProviders/themeContext/themeContext";
import { UserProvider } from "./themeProviders/userContext/userContext";

export const App = ({ children }) => {
	return (
		<ThemeProvider>
			<UserProvider>{children}</UserProvider>
		</ThemeProvider>
	);
};

export default App;
