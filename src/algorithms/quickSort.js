import { generateArray, waitforme } from "./helper";

let arr = [];

export const doQuickSort = async (
    delay,
    array,
    setDisplayArray,
    setColorsArray
) => {
    // let newColorsArray = new Array(arr.length).fill(0);
    // newColorsArray[j] = 1;
    // newColorsArray[j+1] = 2;
    // setColorsArray(newColorsArray)

    arr = array.concat();
    await quickSort(0, arr.length - 1, setDisplayArray, setColorsArray, delay);
};

const quickSort = async (l, r, setDisplayArray, setColorsArray, delay) => {
    if (l < r) {
        let q = await partition(l, r, setDisplayArray, setColorsArray, delay);
        await quickSort(l, q - 1, setDisplayArray, setColorsArray, delay);
        await quickSort(q + 1, r, setDisplayArray, setColorsArray, delay);
    }
};

const partition = async (l, r, setDisplayArray, setColorsArray, delay) => {
    let pivot = arr[r];
    let i = l - 1;
    let j;
    for (j = l; j < r; j++) {
        let newColorsArray = new Array(arr.length).fill(0);
		newColorsArray[r] = 3;
        newColorsArray[i] = 1;
        newColorsArray[j] = 2;
        setColorsArray(newColorsArray);
		await waitforme(delay)

        if (arr[j] < pivot) {
            i = i + 1;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            setDisplayArray(arr.concat());
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;
	let newColorsArray = new Array(arr.length).fill(0);
	newColorsArray[r] = 3;
	newColorsArray[i] = 1;
	newColorsArray[j] = 2;
	await waitforme(delay)
	setColorsArray(newColorsArray);

    setDisplayArray(arr.concat());

    return i + 1;
};
