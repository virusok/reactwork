import { Provider } from "react-redux";
import { store } from "../../template/redux/store";
import { App } from "./app";
export default function Page() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
