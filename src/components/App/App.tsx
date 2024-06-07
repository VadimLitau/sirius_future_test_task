import { SignInPage } from "../../pages/signInPage";
import style from "./App.module.scss";

function App() {
	return (
		<div className={style.mainWrap}>
			<SignInPage />
		</div>
	);
}

export default App;
