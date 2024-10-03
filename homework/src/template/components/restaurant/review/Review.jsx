export const Review = ({ reviews }) => {
	return (
		<>
			<h3>Отзывы</h3>
			{reviews.length ? (
				<ul className='restorane-reviews'>
					{reviews.map((review, index) => (
						<li key={index}>{review.text}</li>
					))}
				</ul>
			) : (
				"У ресторана нет отзывов."
			)}
		</>
	);
};
