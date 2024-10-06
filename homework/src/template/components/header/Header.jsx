import style from "./style.module.css";
export const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.headerTitle}>Мои рестораны</div>
			<div className={style.headerUser}>Pavel(Rubicon)</div>
		</header>
	);
};
