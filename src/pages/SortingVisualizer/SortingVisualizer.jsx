import React, {useState } from 'react'
import { NavLink } from 'react-router-dom';
import {FaLinkedinIn,FaGoogle,FaGithub,FaInstagram} from "react-icons/fa"

import useWindowDimensions from '../../hooks/useWindowDimension';

import sortLogo from "../../assets/sorting.png";

import Bar from '../../components/Bar';

import { generateArray,waitforme } from '../../algorithms/helper';
import { doBubbleSort } from '../../algorithms/bubbleSort';
import { doInsertionSort } from '../../algorithms/insertionSort';
import { doMergeSort } from '../../algorithms/mergeSort';
import { doQuickSort } from '../../algorithms/quickSort';

export default function SortingVisualizer() {

	const {width:vpw} = useWindowDimensions()

	const getInitialBars = () => {
		if(vpw <= 550){
			return 10
		} else if (vpw > 550 && vpw <= 850 ){
			return 20
		} else if (vpw > 850 && vpw <= 1250 ){
			return 25
		} else if (vpw > 1250 ){
			return 35
		}
	}

	const [sortIndex,setSortIndex] = useState(0)
	const [arraySize, setArraySize] = useState(getInitialBars())

	const getBarWidth = () => {
		if(vpw <= 550){
			return (1 / arraySize) * 300
		} else if (vpw > 550 && vpw <= 850 ){
			return (1.5 / arraySize) * 300
		} else if (vpw > 850 && vpw <= 1250 ){
			return (2.5 / arraySize) * 300
		} else if (vpw > 1250 ){
			return (3 / arraySize) * 300
		}
	}

	const [barWidth, setBarWidth] = useState(getBarWidth())

	const [displayArray,setDisplayArray] = useState(generateArray(arraySize))
	const [array,setArray] = useState(displayArray)
	const [colorsArray, setColorsArray] = useState(new Array(displayArray.length).fill(0))

	const [delay, setDelay] = useState(200)
	const [disabled, setDisabled] = useState(false)

	const handleGenerate = () => {
		let tempArr = generateArray(arraySize)
		setBarWidth(getBarWidth())
		setDisplayArray([...tempArr]);
		setArray([...tempArr]);	
	}

	const handleSizeChange = (e) => {
		setArraySize(e.target.value)
		let tempArr = generateArray(e.target.value)
		setBarWidth(getBarWidth())
		setDisplayArray([...tempArr]);
		setArray([...tempArr]);	
	}

	const handleMergeSort = async () => {
		var arr = [...displayArray];
		setDisabled(true)
		setSortIndex(3)
		await doMergeSort(delay,arr,setDisplayArray,setColorsArray)
		setColorsArray(new Array(arr.length).fill(0))
		setDisabled(false)
		setSortIndex(0)
	}
	const handleQuickSort = async () => {
		var arr = [...displayArray];
		setDisabled(true)
		setSortIndex(4)
		await doQuickSort(delay,arr,setDisplayArray,setColorsArray)
		setColorsArray(new Array(arr.length).fill(0))
		setDisabled(false)
		setSortIndex(0)
	}
	const handleInsertionSort = async () => {
		var arr = [...displayArray]
		setDisabled(true)
		setSortIndex(2)
		await doInsertionSort(delay,arr,setDisplayArray,setColorsArray)
		setColorsArray(new Array(arr.length).fill(0))
		setDisabled(false)
		setSortIndex(0)
	}

	const handleBubbleSort = async () => {
		var arr = [...displayArray];
		setDisabled(true)
		setSortIndex(1)
		await doBubbleSort(delay,arr,setDisplayArray,setColorsArray)
		setColorsArray(new Array(arr.length).fill(0))
		setDisabled(false)
		setSortIndex(0)
	}
  return <>
		<div className="pageWrapper w-full bg-blue-100">
			<header className="headerPage w-full bg-white py-2 flex items-center justify-center">
				<div className="logoWrapper w-12 mr-2">
					<img className="w-full object-cover object-center" src={sortLogo} alt="" />
				</div>
				<div className="pageHeader">
					<p className="headerText text-black font-outfit font-bold text-2xl">Sorting Visualizer</p>
				</div>
			</header>
			<main className="pageContent bg-blue-100 w-full">
				<div className="sortControls pt-4">
					<div className="buttonsWrapper w-full">
						<div className="newArray text-center">
							<button disabled={disabled ? true : false} onClick={handleGenerate} className={`${disabled ? "disabledButton" : ""} font-outfit font-semibold text-lg bg-white px-4 py-2 rounded shadow-sm hover:shadow-md`}>Generate New Array</button>
						</div>
						<div className="sortMethod mt-2 grid grid-cols-2 md:grid-cols-4 gap-2 px-4">
							<button disabled={disabled ? true : false} onClick={handleBubbleSort} className={`${sortIndex === 1 ? "activeSort" : disabled && "disabledButton"} font-outfit font-semibold text-lg bg-white px-4 py-2 rounded shadow-sm hover:shadow-md`}>Bubble Sort</button>
							<button disabled={disabled ? true : false} onClick={handleInsertionSort} className={`${sortIndex === 2 ? "activeSort" : disabled && "disabledButton"} font-outfit font-semibold text-lg bg-white px-4 py-2 rounded shadow-sm hover:shadow-md`}>Insertion Sort</button>
							<button disabled={disabled ? true : false} onClick={handleMergeSort} className={`${sortIndex === 3 ? "activeSort" : disabled && "disabledButton"} font-outfit font-semibold text-lg bg-white px-4 py-2 rounded shadow-sm hover:shadow-md`}>Merge Sort</button>
							<button disabled={disabled ? true : false} onClick={handleQuickSort} className={`${sortIndex === 4 ? "activeSort" : disabled && "disabledButton"} font-outfit font-semibold text-lg bg-white px-4 py-2 rounded shadow-sm hover:shadow-md`}>Quick Sort</button>
						</div>
					</div>
					<div className="rangeController md:flex md:justify-around">
						<div className="sizeRange flex justify-center mt-2 items-center">
							<p className="sizeText font-outfit font-semibold mr-4 text-lg">Size of the array: </p>
							<input disabled={disabled ? true : false} type="range" min={10} max={50} value={arraySize} onChange={handleSizeChange}/>
						</div>
						<div className="delayTimer flex justify-center mt-1">
							<p className="setDelay font-outfit font-semibold mr-4 text-lg ">Set Delay (in ms) : </p>
							<input disabled={disabled ? true : false}  type="range" min={100} max={3000} className="bg-transparent focus:bg-white focus:border-none rounded text-center font-outfit text-lg font-semibold" value={delay} onChange={e => setDelay(e.target.value)}/>
						</div>
					</div>
					
				</div>
				<div className="sortingBars mt-4 w-full">
					<div className="barsContainer min-h-[300px] border-2 flex justify-evenly mx-auto w-[90%] h-4">
					{displayArray && displayArray.map((value,index) =>
						<Bar key={index} barWidth={barWidth} heightValue={value} colorCode={colorsArray[index]}/>
					)} 
					</div>
				</div>
			</main>
			<footer className="bg-base-500 mt-8">
				<p className="footerText font-outfit font-medium text-white text-center text-lg pt-4">Made with love by @sansarj17 💖💖</p>
				<div className="socials py-4 px-8 md:px-64 flex w-full items-center justify-around">
					<a href="https://www.linkedin.com/in/sansar-jaiswal-b128a61a5/">
						<div className="icon-wrapper border-2 opacity-80 hover:opacity-100 border-transparent hover:border-white hover:scale-[1.2] rounded-full p-3">
							<FaLinkedinIn className="text-2xl text-white"/>
						</div>
					</a>
					<a href="mailto:hjaiswal34@gmail.com">
						<div className="icon-wrapper border-2 opacity-80 hover:opacity-100 border-transparent hover:border-white hover:scale-[1.2] rounded-full p-3">
							<FaGoogle className="text-2xl text-white"/>
						</div>
					</a>
					<a href="https://github.com/sansarj17">
						<div className="icon-wrapper border-2 opacity-80 hover:opacity-100 border-transparent hover:border-white hover:scale-[1.2] rounded-full p-3">
							<FaGithub className="text-2xl text-white"/>
						</div>
					</a>
					<a href="https://www.instagram.com/jaiswl_sansar/">
						<div className="icon-wrapper border-2 opacity-80 hover:opacity-100 border-transparent hover:border-white hover:scale-[1.2] rounded-full p-3">
							<FaInstagram className="text-2xl text-white"/>
						</div>
					</a>
					
					
					
					
				</div>
			</footer>
		</div>
</>
}
