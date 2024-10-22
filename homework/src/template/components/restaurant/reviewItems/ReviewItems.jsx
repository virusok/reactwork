import { UsersReview } from "../../usersReview/UsersReview";
import {
	useGetRestaurantReviewsQuery,
	useGetUsersQuery,
} from "../../../redux/services/api/api";
import { Preloader } from "../../preloader/Preloader";
import style from "./style.module.css";
import { useState } from "react";
import { ReviewForm } from "../../../components/reviewform/ReviewForm";
import { useUser } from "../../../components/themeProviders/userContext/useUser";
import classNames from "classnames";
export const ReviewItems = ({ restaurantId }) => {
	const { auth } = useUser();
	const {
		data: usrData,
		isLoading: usrLoading,
		isError: usrError,
		isFetching: usrFetching,
	} = useGetUsersQuery();
	const { data, isLoading, isError, isFetching, refetch } =
		useGetRestaurantReviewsQuery({
			restaurantId,
		});

	const [isEdit, setIsEdit] = useState(null);
	const [activeReview, setActiveReview] = useState(null);

	if (isLoading || isFetching) {
		return <Preloader />;
	}
	if (isError) {
		return `Error data loading`;
	}

	const restaurantReviews = data.map((item) => ({
		userName: item.userName || null,
		...item,
	}));

	const handleEdit = (id) => {
		const editingReview = restaurantReviews.find((review) => review.id === id);
		setActiveReview(editingReview);
		setIsEdit(id);
	};

	const handleDisableEdit = () => {
		setIsEdit(null);
		setActiveReview(null);
	};

	return (
		<>
			{data.length ? (
				<ul className={style.restoraneReviews}>
					{restaurantReviews.map(({ id, userId, text, userName, rating }) => (
						<li key={id}>
							<div className={style.reviewItem}>
								<UsersReview
									userId={userId}
									userName={userName}
									rating={rating}
									data={usrData}
									isLoading={usrLoading}
									isError={usrError}
									isFetching={usrFetching}
								/>
								<span>{text}</span>
								<button
									className={classNames(style.reviewEditBtn, {
										[style.active]: isEdit === id,
									})}
									onClick={() => handleEdit(id)}
								>
									Редактировать
								</button>
							</div>
						</li>
					))}
				</ul>
			) : (
				"У ресторана нет отзывов."
			)}
			{auth && (
				<ReviewForm
					restaurantId={restaurantId}
					isEdit={isEdit}
					data={activeReview}
					usrData={usrData}
					disableEdit={handleDisableEdit}
					refetch={refetch}
				/>
			)}
		</>
	);
};
