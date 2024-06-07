import style from "./Button.module.scss";

interface IButton {
	btnText: string;
	onClick: () => void;
	dashed?: boolean;
	backgroundColor: string;
	colorText: string;
	paddingBtn: string;
}

export function Button({
	btnText,
	onClick,
	dashed = false,
	backgroundColor,
	colorText,
	paddingBtn,
}: IButton) {
	return (
		<div className={style.wrap}>
			<button
				type="button"
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
