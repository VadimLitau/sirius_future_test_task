import { ChangeEvent, useState } from "react";

const useForm = () => {
	interface IUseForm {
		email: string;
		password: string;
		rememberMe: boolean;
	}

	const [state, setState] = useState<IUseForm>({
		email: "",
		password: "",
		rememberMe: false,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, type, value, checked } = e.target;
		setState((prevState) => ({
			...prevState,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	return [state, handleChange] as const;
};

export default useForm;
