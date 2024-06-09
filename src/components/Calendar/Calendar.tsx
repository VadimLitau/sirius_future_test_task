import { FC } from "react";
import style from "./Calendar.module.scss";
import { useCalendar } from "../../hooks/useCalendar";
import {
	checIsToday,
	checkDateIsEqual,
	formateDate,
} from "../../utils/helpers/date";
import left from "../../assets/images/icons/arrow_left.svg";
import right from "../../assets/images/icons/arrow_right.svg";
import question from "../../assets/images/icons/questions.svg";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";

interface ICalendar {
	locale?: string;
	selectedDate: Date;
	selectDate: (date: Date) => void;
	firstWeekDay?: number;
}
export const Calendar: FC<ICalendar> = ({
	locale = "default",
	firstWeekDay = 2,
	// selectDate,
	selectedDate,
}: ICalendar) => {
	const { state, functions } = useCalendar({
		locale,
		selectedDate,
		firstWeekDay,
	});
	const handleArrowClick = (type: "right" | "left") => {
		functions.onClickArrow(type);
	};

	const btnClick = () => {
		console.log("изменить расписание");
	};
	return (
		<div className={style.calendarWrap}>
			<div className={style.sheduleEdit}>
				<Select />
				<Button
					btnText="Изменить расписание"
					onClick={btnClick}
					backgroundColor="#DECFFF"
					colorText="#323854"
					paddingBtn="10px 93px"
					type="button"
				/>
			</div>
			<div className={style.calendarHeader}>
				<div className={style.montBtnWrap}>
					<button
						onClick={() => {
							handleArrowClick("left");
						}}
					>
						<img src={left} alt="arrow_left" />
					</button>
					<div>
						{state.monthesNames[state.selectedMonth.monthIndex].month}
						<span>{state.selectedYear}</span>
					</div>

					<button
						onClick={() => {
							handleArrowClick("right");
						}}
					>
						<img src={right} alt="arrow_right" />
					</button>
				</div>
				<div className={style.thisDay}>
					{formateDate(selectedDate, "DD MM YYYY")}
				</div>
				<img src={question} alt="question" />
			</div>
			<div className={style.calendar}>
				<div className={style.weekDaysWrap}>
					{state.weekDaysNames.map((weekDaysName) => (
						<div key={weekDaysName.dayShort}>
							<p key={weekDaysName.dayShort}>{weekDaysName.dayShort}</p>
						</div>
					))}
				</div>
				<div className={style.calendarDaysWrap}>
					{state.calendarDays.map((day) => {
						const dayShort = day.dayShort;
						const isToday = checIsToday(day.date);
						const isSelectedDay = checkDateIsEqual(
							day.date,
							state.selectedDate.date
						);
						const isAdditionalDay =
							day.monthIndex !== state.selectedMonth.monthIndex;
						return (
							<div
								aria-hidden
								key={`${day.dayNumber}-${day.monthIndex}`}
								className={[
									`${isToday ? `${style.grey}` : ""}`,
									`${isSelectedDay ? `${style.red}` : ""}`,
									`${isAdditionalDay ? `${style.grey}` : ""}`,
									`${
										dayShort === "сб" || dayShort === "вс"
											? `${style.dayOff}`
											: ``
									}`,
									`${style.calendarDay}`,
								].join(" ")}
								// onClick={() => {
								// 	selectDate(day.date);
								// 	functions.setSelectedDate(day);
								// }}
							>
								{day.dayNumber}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
