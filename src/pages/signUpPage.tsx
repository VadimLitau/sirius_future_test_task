import style from "./signUpPage.module.scss";
import logo from "../assets/images/logo.png";
import Input from "../components/Input/Input";
import useForm from "../hooks/useForm";
import { Button } from "../components/Button/Button";
import { useState } from "react";

export function SignUpPage() {
	const [values, setValues] = useForm();
	const [lang, setLang] = useState(true);
	const hadnleClick = () => {
		if (values.email === "user" && values.password === "password") {
			console.log("entry");
		} else {
			console.log("not entry");
		}
	};
	const handleLang = () => {
		setLang(!lang);
	};

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
					<div className={style.btnWrap}>
						<Button
							btnText="Войти"
							onClick={hadnleClick}
							backgroundColor="#8D7FC7"
							paddingBtn="14px 147px"
							colorText="#ffffff"
							type="button"
						/>
					</div>
				</form>
				<ul className={style.linksList}>
					<li>Я забыл пароль</li>
					<li>Войти как тренер</li>
				</ul>
				<ul className={style.signInWrap}>
					<li>Нет аккаунта?</li>
					<li className={style.signIn}>Зарегистрироваться</li>
				</ul>
				<ul className={style.languangeList}>
					<li
						className={
							lang
								? `${style.languageList_item} ${style.languageList_item_activ}`
								: `${style.languageList_item}`
						}
						onClick={handleLang}
					>
						RU
					</li>
					<li
						className={
							!lang
								? `${style.languageList_item} ${style.languageList_item_activ}`
								: `${style.languageList_item}`
						}
						onClick={handleLang}
					>
						EN
					</li>
				</ul>
			</div>
		</section>
	);
}
