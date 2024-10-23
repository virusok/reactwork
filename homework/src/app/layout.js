export const metadata = {
	title: "React Restaurants. Learn React",
	description: "Demo descriptions",
};
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>{/* тут я могу что то добавить своё. Это тоже учтется */}</head>
			<body>
				<div id='root'>{children}</div>
			</body>
		</html>
	);
}
