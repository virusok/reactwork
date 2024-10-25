"use client";
import style from "./style.module.css";
import classNames from "classnames";
import { useTheme } from "../themeProviders/themeContext/useTheme";
export const ThemeButtons = ({ text, link, styles }) => {
	const { theme } = useTheme();

	return (
		<a
			href={link}
			className={classNames(style.linksNavigation, styles, {
				[style.dark]: theme === "dark",
				[style.white]: theme === "white",
			})}
		>
			{text}
		</a>
	);
};
