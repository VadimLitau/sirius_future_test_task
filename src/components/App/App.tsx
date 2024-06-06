import useForm from "../../hooks/useForm";
import style from "./App.module.scss";

function App() {
	const [values, setValues] = useForm();
	console.log(values);
	return (
		<div className={style.mainWrap}>
			<h1>Hello World</h1>
			<input type="text" name="email" onChange={setValues} />
			<input type="text" name="password" onChange={setValues} />
			<input
				type="checkbox"
				style={{ border: "1px solid #ececec" }}
				onChange={setValues}
				name="rememberMe"
			/>
		</div>
	);
}

export default App;
