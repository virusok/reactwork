import style from "./style.module.css";
export const Preloader = () => {
	return (
		<div className={style.preloader}>
			<div className={style.preloaderDots}>
				<div className={style.dot}></div>
				<div className={style.dot}></div>
				<div className={style.dot}></div>
				<div className={style.dot}></div>
			</div>
			<div className={style.preloaderDesc}>Loading</div>
		</div>
	);
};
