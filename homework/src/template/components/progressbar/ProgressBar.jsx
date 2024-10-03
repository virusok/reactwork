import { useEffect, useState } from "react";
const progressBar = "progressbar";
export const ProgressBar = () => {
	const [progressBarWidth, setProgressBarWidth] = useState(0);
	useEffect(() => {
		const checkHeight = () => {
			const windowHeight = document.body.clientHeight - window.innerHeight;
			const windowScrolled = window.pageYOffset;
			setProgressBarWidth(Math.round((windowScrolled * 100) / windowHeight) + "%");
		};
		window.addEventListener("scroll", checkHeight);
		return () => {
			window.removeEventListener("scroll", checkHeight);
		};
	}, [progressBarWidth]);
	return <div className={progressBar} style={{ width: progressBarWidth }}></div>;
};
