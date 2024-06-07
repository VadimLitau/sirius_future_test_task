import style from "./signInPage.module.scss";
import logo from "../assets/images/logo.png";
import Input from "../components/Input/Input";
import useForm from "../hooks/useForm";

export function SignInPage() {
	const [values, setValues] = useForm();
	return (
		<section className={style.entryWrap}>
			<div className={style.entry}>
				<img src={logo} alt="logo" />
				<h1>Вход в Sirius Future</h1>
				<form>
					<Input
						placeholder="E-mail"
						name="email"
						value={values.email}
						onChange={setValues}
					/>
					<Input
						placeholder="Пароль"
						name="password"
						value={values.password}
						onChange={setValues}
						hide={true}
					/>
					<label htmlFor="rememberMe" className={style.checkbox}>
						<input
							type="checkbox"
							name="rememberMe"
							id="rememberMe"
							onChange={setValues}
						/>
						Запомнить меня
					</label>
				</form>
			</div>
		</section>
	);
}
