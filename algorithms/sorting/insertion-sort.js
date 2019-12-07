function insertionSort(toSort) {
	for (let j = 1; j < toSort.length; j++) {
		const key = toSort[j];
		let i = j - 1;
		while (i >= 0 && toSort[i] > key) {
			toSort[i + 1] = toSort[i];
			i--;
			toSort[i + 1] = key;
		}
	}
	console.log(toSort);
}
insertionSort([31, 41, 59, 26, 41, 58]);
