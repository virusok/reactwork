import { useState } from "react";
import { ThemeContext } from ".";
export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("white");
	const swapTheme = () => {
		setTheme((current) => {
			if (current === "white") {
				return "dark";
			} else {
				return "white";
			}
		});
	};
	return (
		<ThemeContext.Provider value={{ theme, swapTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
