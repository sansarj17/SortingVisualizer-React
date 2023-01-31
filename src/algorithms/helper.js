const getRandom = (min,max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateArray = (size) => {
	let tempArray = [];
	for(let i=0; i<size; i++){
		tempArray.push(getRandom(50,300))
	}
	return tempArray
}

export function waitforme(milisec) { 
	return new Promise(resolve => { 
		setTimeout(() => { resolve('') }, milisec); 
	}) 
}