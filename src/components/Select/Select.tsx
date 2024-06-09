import { useState } from "react";
import style from "./Select.module.scss";
import ArrowDown from "../../assets/images/icons/arrow_down.svg?react";
const lessons = [
	{ value: "mentalMath", lesson: "Ментальная арифметика" },
	{ value: "фывфывыфh", lesson: "Ментальная арифметика2" },
	{ value: "mentalMath3", lesson: "Ментальная арифметика3" },
];

interface ILessons {
	value: string;
	lesson: string;
}
export const Select = () => {
	const [value, setValue] = useState<ILessons>({
		value: "default",
		lesson: "Выберите предмет",
	});
	const [listVisible, setListVisible] = useState(false);

	const editListVisible = () => {
		setListVisible(!listVisible);
	};
	const listItemHandle = (item: ILessons) => {
		setListVisible(!listVisible);
		setValue(item);
	};

	return (
		<>
			<div className={style.selectWrap}>
				<div onClick={editListVisible}>
					<p
						className={
							value.value != "default"
								? `${style.colorTextBlack}`
								: `${style.colorTextGrey}`
						}
					>
						{value.lesson}
					</p>
					<ArrowDown />{" "}
				</div>

				{listVisible && (
					<ul>
						{lessons.map((item) => (
							<li
								key={item.value}
								onClick={() => {
									listItemHandle(item);
								}}
							>
								{item.lesson}
							</li>
						))}
					</ul>
				)}
			</div>
			{listVisible && (
				<div
					className={style.invisibleWrap}
					onClick={() => {
						setListVisible(!listVisible);
					}}
				></div>
			)}
		</>
	);
};
