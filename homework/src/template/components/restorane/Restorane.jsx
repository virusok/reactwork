import { RestoraneItem } from "./restoraneitem/RestoraneItem";
export const Restorane = ({ restorane }) => {
	return (
		<div className='restorane-list'>
			{restorane.map(({ menu, reviews }) => {
				return <RestoraneItem menu={menu} reviews={reviews} />;
			})}
		</div>
	);
};
