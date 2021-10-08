export const datePrettier = (date: string) =>
	date.split('T')[0].split('-').reverse().join('/');
