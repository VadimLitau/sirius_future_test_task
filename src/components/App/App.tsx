import Input from "../Input/Input";
import style from "./App.module.scss";

function App() {
	return (
		<div className={style.mainWrap}>
			<h1>Hello World</h1>
			<Input />
		</div>
	);
}

export default App;
