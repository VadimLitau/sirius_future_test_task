import { FC } from "react";
import style from "./Calendar.module.scss";
import { useCalendar } from "../../hooks/useCalendar";
import { checIsToday, checkDateIsEqual } from "../../utils/helpers/date";

interface ICalendar {
	locale?: string;
	selectedDate: Date;
	selectDate: (date: Date) => void;
	firstWeekDay?: number;
}
export const Calendar: FC<ICalendar> = ({
	locale = "default",
	firstWeekDay = 2,
	selectDate,
	selectedDate,
}: ICalendar) => {
	const { state, functions } = useCalendar({
		locale,
		selectedDate,
		firstWeekDay,
	});
	return (
		<div style={{ width: "350px" }}>
			<div>
				<button
					onClick={() => {
						functions.onClickArrow("left");
					}}
				>
					left
				</button>
				{state.mode === "days" && (
					<div>
						{state.monthesNames[state.selectedMonth.monthIndex].month}
						{state.selectedYear}
					</div>
				)}
				<button
					onClick={() => {
						functions.onClickArrow("right");
					}}
				>
					right
				</button>
			</div>
			<div>
				{state.mode === "days" && (
					<>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								marginTop: "10px",
							}}
						>
							{state.weekDaysNames.map((weekDaysName) => (
								<div key={weekDaysName.dayShort} style={{ width: "50px" }}>
									{weekDaysName.dayShort}
								</div>
							))}
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								marginTop: "10px",
								flexWrap: "wrap",
							}}
						>
							{state.calendarDays.map((day) => {
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
										style={{ width: "50px" }}
										className={[
											`${isToday ? `${style.grey}` : ""}`,
											`${isSelectedDay ? `${style.red}` : ""}`,
											`${isAdditionalDay ? `${style.grey}` : ""}`,
										].join(" ")}
										onClick={() => {
											selectDate(day.date);
											functions.setSelectedDate(day);
										}}
									>
										{day.dayNumber}
									</div>
								);
							})}
						</div>
					</>
				)}
			</div>
		</div>
	);
};
