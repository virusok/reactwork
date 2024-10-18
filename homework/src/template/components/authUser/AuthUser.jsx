import { Button } from "../Button/Button";
import { useUser } from "../themeProviders/userContext/useUser";
import style from "./style.module.css";
import classnames from "classnames";
export const AuthUser = () => {
	const { auth, authorization } = useUser();
	return (
		<div
			className={classnames({
				[style.headerUser]: auth != null ? "active" : null,
			})}
		>
			<span>{auth}</span>
			<Button
				className={style.lcBtn}
				styleActive={auth != null ? "active" : null}
				onClick={authorization}
				text={auth != null ? "Выйти" : "Войти"}
			/>
		</div>
	);
};
