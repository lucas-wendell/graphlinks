export function transformCamelCase(str: string) {
	let result: string = '';

	for (let index = 0; index < str.length; index++) {
		const character = str[index];
		const isLowerCase =
			character === character.toLowerCase() &&
			character !== character.toUpperCase();

		if (!isLowerCase) {
			result += ' ' + character;
		} else {
			result += character;
		}
	}

	return result;
}
