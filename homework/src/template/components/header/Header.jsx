import { Button } from "../Button/Button";
import style from "./style.module.css";
import { useTheme } from "../themeProviders/themeContext/useTheme";
import { AuthUser } from "../authUser/AuthUser";
import { Clock } from "../Clock/Clock";
export const Header = () => {
	const { swapTheme } = useTheme();

	return (
		<header className={style.header}>
			<div className={style.headerTitle}>Мои рестораны</div>
			<Clock />
			<Button
				onClick={swapTheme}
				text='Изменить тему'
				className={style.changeBtn}
			></Button>
			<AuthUser />
		</header>
	);
};
