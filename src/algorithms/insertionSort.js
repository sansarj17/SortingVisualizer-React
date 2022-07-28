import { generateArray, waitforme } from "./helper";

export const doInsertionSort = async (
    delay,
    arr,
    setDisplayArray,
    setColorsArray
) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];

		let newColorsArray = new Array(arr.length).fill(0);
        newColorsArray[i] = 1;
    	setColorsArray(newColorsArray);
        while (arr[j] >= key && j >= 0) {
            let newColorsArray = new Array(arr.length).fill(0);
            newColorsArray[i] = 1;
            newColorsArray[j] = 2;
            setColorsArray(newColorsArray);
            arr[j + 1] = arr[j];
            await waitforme(delay/2);
            j--;
        }
        arr[j + 1] = key;
        await waitforme(delay/2);
        setDisplayArray([...arr]);
    }
};
