"use client";
import { useParams } from "next/navigation";
import { ReviewItems } from "../../../../../template/components/restaurant/reviewItems/ReviewItems";

export default function RestaurantMenu() {
	const { restaurantId } = useParams();

	return (
		<>
			<h3>Отзывы</h3>
			<ReviewItems restaurantId={restaurantId} />
		</>
	);
}
