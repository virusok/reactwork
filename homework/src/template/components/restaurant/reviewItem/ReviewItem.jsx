import { UsersReview } from "../../usersReview/UsersReview";
import {
	useGetRestaurantReviewsQuery,
	useEditReviewMutation,
} from "../../../redux/services/api/api";
import { Preloader } from "../../preloader/Preloader";
import style from "./style.module.css";
import { useEffect, useState } from "react";
export const ReviewItem = ({ restaurantId }) => {
	const { data, isLoading, isError, isFetching } = useGetRestaurantReviewsQuery({
		restaurantId,
	});

	const [
		editReview,
		{
			isLoading: editIsLoading,
			isError: editIsError,
			isFetching: editIsFetching,
		},
	] = useEditReviewMutation();
	const [newText, setNewText] = useState("");
	const [reviewId, setReviewId] = useState(null);

	useEffect(() => {
		if (data && data.length > 0) {
			setNewText(data[0].text || "");
		}
	}, [data]);

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

	const handleEdit = async (currentReviewId, currentText) => {
		setNewText(currentText);
		setReviewId(currentReviewId);
	};
	const handleSubmit = async () => {
		editReview({
			restaurantId,
			newReview: {
				id: reviewId,
				text: newText,
			},
		});
		setNewText("");
		setReviewId(null);
	};

	if (editIsLoading || editIsFetching) {
		return <Preloader />;
	}
	if (editIsError) {
		return `Error data loading`;
	}
	return (
		<>
			{data.length ? (
				<ul className={style.restoraneReviews}>
					{restaurantReviews.map(({ id, userId, text, userName, rating }) => (
						<li key={id}>
							<div className={style.reviewItem}>
								<UsersReview userId={userId} userName={userName} rating={rating} />
								<span>{text}</span>
								{reviewId === id ? (
									<div>
										<input
											className={style.smallInput}
											type='text'
											value={newText}
											onChange={(e) => setNewText(e.target.value)}
										/>
										<button onClick={handleSubmit} className={style.acceptBtn}>
											ok
										</button>
									</div>
								) : (
									<button
										className={style.reviewEditBtn}
										onClick={() => handleEdit(id, text)}
									>
										Изменить
									</button>
								)}
							</div>
						</li>
					))}
				</ul>
			) : (
				"У ресторана нет отзывов."
			)}
		</>
	);
};
