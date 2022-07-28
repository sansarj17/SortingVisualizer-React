import { generateArray, waitforme } from "./helper";

let arr = [];

export const doMergeSort = async (
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
    await mergeSort(0, arr.length - 1, setDisplayArray, setColorsArray, delay);
};

const mergeSort = async (l, r, setDisplayArray, setColorsArray, delay) => {
    if (l >= r) return;

    let mid = Math.floor((l + r) / 2);

    await mergeSort(l, mid, setDisplayArray, setColorsArray, delay);
    await mergeSort(mid + 1, r, setDisplayArray, setColorsArray, delay);

    //make a tempArr and then insert them into arr
    let b = new Array(r - l + 1);
    let i = l,
        j = mid + 1;
    let k = l;

    while (i <= mid && j <= r) {
        let newColorsArray = new Array(arr.length).fill(0);
        newColorsArray[i] = 1;
        newColorsArray[j] = 1;
        setColorsArray(newColorsArray);
		await waitforme(delay);
        if (arr[i] < arr[j]) {
            b[k] = arr[i];
            k++;
            i++;
        } else {
            b[k] = arr[j];
            k++;
            j++;
        }
    }

    //whenever one part exhausts itself append remaining to b
    if (i > mid) {
        while (j <= r) {
			let newColorsArray = new Array(arr.length).fill(0);
        	newColorsArray[i] = 1;
        	newColorsArray[j] = 1;
        	setColorsArray(newColorsArray);
			await waitforme(delay);
            b[k] = arr[j];
            k++;
            j++;
        }
    }
    if (j > r) {
        while (i <= mid) {
            let newColorsArray = new Array(arr.length).fill(0);
        	newColorsArray[i] = 1;
        	newColorsArray[j] = 1;
        	setColorsArray(newColorsArray);
			await waitforme(delay);
			b[k] = arr[i];
            k++;
            i++;
        }
    }

    for (k = l; k <= r; k++) {
        arr[k] = b[k];
		let newColorsArray = new Array(arr.length).fill(0);
		newColorsArray[k] = 2
        newColorsArray[i-1] = 1; //for ending limits of array
        newColorsArray[j-1] = 1; //for ending limits of array
        setColorsArray(newColorsArray.concat());
		setDisplayArray(arr.concat())
		await waitforme(delay);
    }
};
