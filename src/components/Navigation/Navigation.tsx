import style from "./Navigation.module.scss";
import logo from "../../assets/images/navigation_logo.png";
import { NavMenu } from "../NavMenu/NavMenu";
import { Button } from "../Button/Button";

export function Navigation() {
	const handleClick = () => {
		console.log("нажатие по баннеру");
	};
	return (
		<section className={style.navigation}>
			<img src={logo} alt="Логотип" />
			<NavMenu />
			<div className={style.banner}>
				<h2>Учитесь бесплатно</h2>
				<p>
					Приводите друзей с детьми заниматься в Sirius Future <br />и получайте
					подарки!
				</p>
				<Button
					btnText="Узнать"
					paddingBtn="8px 16px"
					backgroundColor="#D8ECFF"
					colorText="#000000"
					onClick={handleClick}
				/>
			</div>
		</section>
	);
}
