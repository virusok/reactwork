import { RestoraneItem } from "./restoraneitem/RestoraneItem";
export const Restorane = ({ restorane }) => {
	return (
		<div className='restorane-list'>
			<RestoraneItem restorane={restorane} />
			<RestoraneItem restorane={restorane} />
			<RestoraneItem restorane={restorane} />
			<RestoraneItem restorane={restorane} />
			<RestoraneItem restorane={restorane} />
			<RestoraneItem restorane={restorane} />
		</div>
	);
};
