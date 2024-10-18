import { getUsers } from "../../redux/users/getUsers";
import { selectUserById, selectUserRequestStatus } from "../../redux/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./style.module.css";
import { Preloader } from "../preloader/Preloader";
import { PENDING, IDLE } from "../../redux/dataStatus";
export const UsersReview = ({ userId }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers(userId));
	}, [dispatch, userId]);

	const user = useSelector((state) => selectUserById(state, userId));

	const requestStatus = useSelector(selectUserRequestStatus);

	if (requestStatus === IDLE || requestStatus === PENDING) {
		return <Preloader />;
	}
	return <div className={style.userReview}>{user.name}</div>;
};
