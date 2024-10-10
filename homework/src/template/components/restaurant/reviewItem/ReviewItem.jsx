import { selectReviewsById } from "../../../redux/reviews";
import { useSelector } from "react-redux";
export const ReviewItem = ({ id }) => {
	const reviews = useSelector((state) => selectReviewsById(state, id));
	return <li>{reviews.text}</li>;
};
