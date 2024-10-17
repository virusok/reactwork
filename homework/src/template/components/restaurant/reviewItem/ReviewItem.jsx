import { getReviews } from "../../../redux/reviews/getReviews";
import {
	selectReviewById,
	selectReviewRequestStatus,
} from "../../../redux/reviews";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersReview } from "../../usersReview/UsersReview";
import { Preloader } from "../../preloader/Preloader";
import { PENDING, IDLE } from "../../../redux/dataStatus";

export const ReviewItem = ({ id }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getReviews(id));
	}, [dispatch, id]);

	const review = useSelector((state) => selectReviewById(state, id));

	const requestStatus = useSelector(selectReviewRequestStatus);

	if (requestStatus === IDLE || requestStatus === PENDING) {
		return <Preloader />;
	}

	return (
		<li>
			<UsersReview userId={review.userId} />
			{review.text}
		</li>
	);
};
