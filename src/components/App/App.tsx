import { useState } from "react";
import { Calendar } from "../Calendar/Calendar";
import style from "./App.module.scss";
import { formateDate } from "../../utils/helpers/date";
function App() {
	const [selectedDate, selectDate] = useState(new Date());
	return (
		<div className={style.mainWrap}>
			<div>{formateDate(selectedDate, "DD MM YYYY")}</div>
			<Calendar selectDate={selectDate} selectedDate={selectedDate} />
		</div>
	);
}

export default App;
