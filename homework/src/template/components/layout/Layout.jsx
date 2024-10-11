import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";
import { ProgressBar } from "../progressbar/ProgressBar";
export const Layout = ({ children }) => {
	return (
		<>
			<ProgressBar />
			<Header />
			{children}
			<Footer />
		</>
	);
};
