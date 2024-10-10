import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";
import { ProgressBar } from "../progressbar/ProgressBar";
import { Cart } from "../cart/Cart.jsx";
export const Layout = ({ children }) => {
	return (
		<>
			<ProgressBar />
			<Header />
			{children}
			<Cart />
			<Footer />
		</>
	);
};
