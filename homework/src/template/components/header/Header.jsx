import { Button } from "../Button/Button";
import style from "./style.module.css";
import { useTheme } from "../themeProviders/themeContext/useTheme";
import { AuthUser } from "../authUser/AuthUser";
export const Header = () => {
	const { swapTheme } = useTheme();

	return (
		<header className={style.header}>
			<div className={style.headerTitle}>Мои рестораны</div>
			<Button
				onClick={swapTheme}
				text='Изменить тему'
				className={style.changeBtn}
			></Button>
			<AuthUser />
		</header>
	);
};
