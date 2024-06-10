import style from "./Header.module.scss";
import chatIcon from "../../assets/images/icons/chat_icon.svg";
import userAvatar from "../../assets/images/user_avatar.png";
import ArrowDown from "../../assets/images/icons/user_arrow_down.svg?react";

export function Header() {
	return (
		<section className={style.headerWrap}>
			<p className={style.headerText}>
				Добро пожаловать, <span>Михаил</span>!
			</p>
			<div className={style.headerUserProfile}>
				<img src={chatIcon} alt="chat icon" />
				<div className={style.headerUserAccount}>
					<img src={userAvatar} alt="user avatar" />
					<ArrowDown />
				</div>
			</div>
		</section>
	);
}
