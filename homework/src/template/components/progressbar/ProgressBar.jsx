import { useEffect } from "react";
const progressBar = "progressbar";
export const ProgressBar = () => {
	let rateScroll = 0;
	useEffect(() => {
		const checkHeight = () => {
			const windowHeight = document.body.clientHeight - window.innerHeight;
			const windowScrolled = window.pageYOffset;
			rateScroll = Math.round((windowScrolled * 100) / windowHeight);
			document.querySelector(`.${progressBar}`).style.width = `${rateScroll}%`;
		};
		window.addEventListener("scroll", checkHeight);
		return () => {
			window.removeEventListener("scroll", checkHeight);
		};
	}, [rateScroll]);
	return <div className={progressBar}></div>;
};
