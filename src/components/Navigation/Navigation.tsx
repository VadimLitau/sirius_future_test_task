import style from "./Navigation.module.scss";
import logo from "../../assets/images/navigation_logo.png";
import { NavMenu } from "../NavMenu/NavMenu";

export function Navigation() {
	return (
		<section className={style.navigation}>
			<img src={logo} alt="Логотип" />
			<NavMenu />
		</section>
	);
}
