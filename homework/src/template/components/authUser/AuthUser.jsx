import { Button } from "../Button/Button";
import { useUser } from "../themeProviders/userContext/useUser";
import style from "./style.module.css";
import classnames from "classnames";
export const AuthUser = () => {
	const { auth, authorization } = useUser();
	return (
		<div
			className={classnames({ [style.headerUser]: auth != "" ? "active" : "" })}
		>
			<span>{auth}</span>
			<Button
				className={style.lcBtn}
				isActive={auth != "" ? "" : "active"}
				onClick={authorization}
				text={auth != "" ? "Выйти" : "Войти"}
			/>
		</div>
	);
};
