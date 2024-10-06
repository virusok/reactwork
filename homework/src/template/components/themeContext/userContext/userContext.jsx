import { useState } from "react";
import { UserContext } from "..";

export const UserProvider = ({ children }) => {
	const [auth, setAuth] = useState("");
	const userName = "Pavel (Rubicon)";
	const authorization = () => {
		setAuth((current) => {
			if (current === "") {
				return userName;
			} else {
				return "";
			}
		});
	};
	return (
		<UserContext.Provider value={{ auth, authorization }}>
			{children}
		</UserContext.Provider>
	);
};
