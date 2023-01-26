export default function appendToEachArrayValue(array, appendString) {
	const x = [];
	for (const idx of array) {
		const value = idx;
		x.push(appendString + value);
	}
	return x;
}

