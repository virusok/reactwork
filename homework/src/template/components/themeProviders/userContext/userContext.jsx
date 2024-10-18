import { useState } from "react";
import { UserContext } from ".";

export const UserProvider = ({ children }) => {
	const [auth, setAuth] = useState(null);
	const userName = "Pavel (Rubicon)";
	const authorization = () => {
		setAuth((current) => {
			if (current === null) {
				return userName;
			} else {
				return null;
			}
		});
	};
	return (
		<UserContext.Provider value={{ auth, authorization }}>
			{children}
		</UserContext.Provider>
	);
};
