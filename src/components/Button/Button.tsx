import style from "./Button.module.scss";

interface IButton {
	btnText: string;
	onClick: () => void;
	dashed?: boolean;
	backgroundColor: string;
	colorText: string;
	paddingBtn: string;
	type?: "button" | "submit" | "reset";
}

export function Button({
	btnText,
	onClick,
	dashed = false,
	backgroundColor,
	colorText,
	paddingBtn,
	type,
}: IButton) {
	return (
		<div className={style.wrap}>
			<button
				type={type}
				onClick={onClick}
				className={dashed ? style.dashed : ""}
				style={{
					backgroundColor: `${backgroundColor}`,
					color: `${colorText}`,
					padding: `${paddingBtn}`,
				}}
			>
				{btnText}
			</button>
		</div>
	);
}
