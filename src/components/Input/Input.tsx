import style from "./input.module.scss";
import HideText from "../../assets/images/hide_text.svg?react";
import { ChangeEvent, useState } from "react";
// import { ChangeEvent } from "react";

interface IInput {
	placeholder: string;
	maxLegtn?: number;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	name: string;
	hide?: boolean;
}

function Input({
	placeholder,
	maxLegtn = 20,
	value,
	onChange,
	name,
	hide = false,
}: IInput) {
	const [passwordVisible, setPasswordVisible] = useState(true);
	return (
		<span className={style.inputWrap}>
			<input
				type={hide && passwordVisible ? "password" : "text"}
				className={style.input}
				placeholder={placeholder}
				maxLength={maxLegtn}
				value={value}
				onChange={(e) => {
					onChange(e);
				}}
				name={name}
			/>
			{hide ? (
				<HideText
					stroke={passwordVisible ? "#79747f" : "#7362bc"}
					className={style.inputIcon}
					onClick={() => {
						setPasswordVisible(!passwordVisible);
					}}
				/>
			) : (
				""
			)}
		</span>
	);
}

export default Input;
