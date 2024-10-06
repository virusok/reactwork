import { useTheme } from "../themeProviders/themeContext/useTheme";
import style from "./style.module.css";
import classnames from "classnames";
export const Button = ({ text, onClick, isActive, className, btnActive }) => {
	const { theme } = useTheme();
	return (
		<button
			className={classnames(style.default, className, {
				[style.active]: isActive,
				[style.dark]: theme === "dark",
				[style.white]: theme === "white",
			})}
			onClick={onClick}
			disabled={btnActive}
		>
			{text}
		</button>
	);
};
