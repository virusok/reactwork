import { Button } from "../Button/Button";
import style from "./style.module.css";
import { useButton } from "../themeContext/buttonsContext/useButton";
import { AuthUser } from "../authUser/AuthUser";
export const Header = () => {
	const { swapTheme } = useButton();

	return (
		<header>
			<div className={style.headerTitle}>Мои рестораны</div>
			<Button onClick={swapTheme} text='Изменить тему'></Button>
			<AuthUser />
		</header>
	);
};
