import { checkDateIsEqual } from "./checkDateIsEqual";

export const checIsToday = (date: Date) => {
	const today = new Date();

	return checkDateIsEqual(today, date);
};
