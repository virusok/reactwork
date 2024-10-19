import {
	selectReviewById,
	selectReviewRequestStatus,
} from "../../../redux/reviews";
import { useSelector } from "react-redux";
import { UsersReview } from "../../usersReview/UsersReview";
import { Preloader } from "../../preloader/Preloader";
import { PENDING, IDLE } from "../../../redux/dataStatus";

export const ReviewItem = ({ id }) => {
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
