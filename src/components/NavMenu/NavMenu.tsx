import style from "./NavMenu.module.scss";
import Home from "../../assets/images/icons/home.svg?react";
import Shedule from "../../assets/images/icons/schedule.svg?react";
import Money from "../../assets/images/icons/money.svg?react";
import Cup from "../../assets/images/icons/cup.svg?react";
import Puzzle from "../../assets/images/icons/puzzle.svg?react";
import Folder from "../../assets/images/icons/folder-open.svg?react";
import Connection from "../../assets/images/icons/connection.svg?react";
import Settings from "../../assets/images/icons/settings.svg?react";
import Questions from "../../assets/images/icons/questions.svg?react";
import { useState } from "react";
interface IMenuItem {
	home: boolean;
	shedule: boolean;
	money: boolean;
	cup: boolean;
	puzzle: boolean;
	folder: boolean;
	connection: boolean;
	settings: boolean;
	questions: boolean;
}
export function NavMenu() {
	const initialMenuItem: IMenuItem = {
		home: false,
		shedule: true,
		money: false,
		cup: false,
		puzzle: false,
		folder: false,
		connection: false,
		settings: false,
		questions: false,
	};
	const [active, setActive] = useState<IMenuItem>(initialMenuItem);
	// при такой реализации пункт активным пунктом меню может быть толко что-то одно
	// оставлю на всякий случай
	const toggleMenuItem = (item: keyof IMenuItem) => {
		setActive({
			...Object.keys(active).reduce((acc, key) => {
				acc[key as keyof IMenuItem] = false;
				return acc;
			}, {} as IMenuItem),
			[item]: true,
		});
	};
	// const toggleMenuItem = (item: keyof IMenuItem) => {
	// 	setActive((prevActive: IMenuItem) => ({
	// 		...prevActive,
	// 		[item]: !prevActive[item],
	// 	}));
	// };
	const activeClass = (elem: boolean): string => {
		return elem
			? `${style.menuList_item} ${style.menuList_item_activ}`
			: `${style.menuList_item} `;
	};
	const colorSvg = (elem: boolean): string => {
		return elem ? "#ffffff" : "#434B74";
	};
	return (
		<ul className={style.menuList}>
			<li
				className={activeClass(active.home)}
				onClick={() => toggleMenuItem("home")}
			>
				<Home fill={colorSvg(active.home)} />
				<span>Главная</span>
			</li>
			<li
				className={activeClass(active.shedule)}
				onClick={() => toggleMenuItem("shedule")}
			>
				<Shedule stroke={colorSvg(active.shedule)} />
				<span>Расписание</span>
			</li>
			<li
				className={activeClass(active.money)}
				onClick={() => toggleMenuItem("money")}
			>
				<Money stroke={colorSvg(active.money)} />
				<span>Оплата</span>
			</li>
			<li
				className={activeClass(active.cup)}
				onClick={() => toggleMenuItem("cup")}
			>
				<Cup fill={colorSvg(active.cup)} />
				<span>Достижения</span>
			</li>
			<li
				className={activeClass(active.puzzle)}
				onClick={() => toggleMenuItem("puzzle")}
			>
				<Puzzle stroke={colorSvg(active.puzzle)} />
				<span>Тренажеры</span>
			</li>
			<li
				className={activeClass(active.folder)}
				onClick={() => toggleMenuItem("folder")}
			>
				<Folder fill={colorSvg(active.folder)} />
				<span>Библиотека</span>
			</li>
			<li
				className={activeClass(active.connection)}
				onClick={() => toggleMenuItem("connection")}
			>
				<Connection stroke={colorSvg(active.connection)} />
				<span>Проверка связи</span>
			</li>
			<li
				className={activeClass(active.settings)}
				onClick={() => toggleMenuItem("settings")}
			>
				<Settings stroke={colorSvg(active.settings)} />
				<span>Настройки</span>
			</li>
			<li
				className={activeClass(active.questions)}
				onClick={() => toggleMenuItem("questions")}
			>
				<Questions stroke={colorSvg(active.questions)} />
				<span>Вопросы</span>
			</li>
		</ul>
	);
}
