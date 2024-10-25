import App from "../template/components/App";
import { Layout } from "../template/components/layout/Layout";
import { ReduxProvider } from "../template/redux/ReduxProvider";
import "./styles/global.css";
export const metadata = {
	title: "React Restaurants. Learn React",
	description: "Demo descriptions",
};
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>{/* тут я могу что то добавить своё. Это тоже учтется */}</head>
			<body>
				<ReduxProvider>
					<div id='root'>
						<App>
							<Layout>{children}</Layout>
						</App>
					</div>
				</ReduxProvider>
			</body>
		</html>
	);
}
