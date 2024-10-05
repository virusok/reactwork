import { useEffect, useState } from "react";
import style from "./style.module.css";
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
<<<<<<< HEAD
	}, []);
	return (
		<div className={style.progressbar} style={{ width: progressBarWidth }}></div>
	);
=======
	}, [progressBarWidth]);
	return <div className={progressBar} style={{ width: progressBarWidth }}></div>;
>>>>>>> main
};
