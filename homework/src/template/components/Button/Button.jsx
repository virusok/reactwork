import { useButton } from "../themeContext/buttonsContext/useButton";
import style from "./style.module.css";
import classnames from "classnames";
export const Button = ({ text, onClick, isActive, className }) => {
	const { theme } = useButton();
	return (
		<button
			className={classnames(style.default, className, {
				[style.active]: isActive,
				[style.dark]: theme === "dark",
				[style.white]: theme === "white",
			})}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
