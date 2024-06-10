import { useState } from "react";
import { Calendar } from "../components/Calendar/Calendar";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import style from "./shedulePage.module.scss";

export function ShedulePage() {
	const [selectedDate, selectDate] = useState(new Date());
	return (
		<section className={style.wrap}>
			<div className={style.main}>
				<Header />
			</div>
			<div className={style.testWrap}>
				<Navigation />
				<div className={style.content}>
					<Calendar selectedDate={selectedDate} selectDate={selectDate} />
				</div>
			</div>
		</section>
	);
}
