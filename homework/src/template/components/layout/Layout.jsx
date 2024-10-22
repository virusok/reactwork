import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";
import { ProgressBar } from "../progressbar/ProgressBar";
import { Cart } from "../cart/Cart.jsx";
import { Outlet } from "react-router-dom";
export const Layout = () => {
	return (
		<>
			<ProgressBar />
			<Header />
			<Outlet />
			<Cart />
			<Footer />
		</>
	);
};
