import { Review } from "../../../components/restaurant/review/Review";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
	selectReviewIds,
	selectReviewRequestStatus,
} from "../../../redux/reviews";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../redux/reviews/getReviews";
import { Preloader } from "../../../components/preloader/Preloader";
import { IDLE, PENDING } from "../../../redux/dataStatus";
export const ReviewsPage = () => {
	const { restaurantId } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getReviews(restaurantId));
	}, [dispatch, restaurantId]);

	const restaurantReviewsIds = useSelector((state) =>
		selectReviewIds(state, restaurantId)
	);
	const requestStatus = useSelector(selectReviewRequestStatus);
	if (requestStatus === IDLE || requestStatus === PENDING) {
		return <Preloader />;
	}

	return <Review reviewIds={restaurantReviewsIds} />;
};
