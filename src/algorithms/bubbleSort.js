import { generateArray, waitforme } from "./helper";

export const doBubbleSort = async (delay,arr,setDisplayArray, setColorsArray) => {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
			let newColorsArray = new Array(arr.length).fill(0);
			newColorsArray[j] = 1;
			newColorsArray[j+1] = 2;
            setColorsArray(newColorsArray)

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            await waitforme(delay);
            setDisplayArray([...arr]);
        }
    }
};
