import { useState } from "react";
import { ButtonsContext } from "..";
export const ButtonsProvider = ({ children }) => {
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
		<ButtonsContext.Provider value={{ theme, swapTheme }}>
			{children}
		</ButtonsContext.Provider>
	);
};
