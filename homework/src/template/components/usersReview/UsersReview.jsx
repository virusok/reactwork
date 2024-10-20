import style from "./style.module.css";
import { Preloader } from "../preloader/Preloader";
import { useGetUsersQuery } from "../../redux/services/api/api";
import classNames from "classnames";
export const UsersReview = ({ userId, userName, rating }) => {
	const { data, isLoading, isError, isFetching } = useGetUsersQuery();

	if (isLoading || isFetching) {
		return <Preloader />;
	}
	if (isError) {
		return `Error data loading`;
	}

	const user = data.find((user) => user.id === userId);
	return (
		<div className={style.userReview}>
			<div>
				{user != undefined
					? user.name
					: userName != null && userName != ""
						? userName
						: "гость"}
			</div>
			<div
				className={classNames(style.rating, {
					[style.ratingGood]: rating >= 4,
					[style.ratingMiddle]: rating === 3,
					[style.ratingBad]: rating < 2,
				})}
			>
				Рейтинг: <span>{rating}</span>
			</div>
		</div>
	);
};
