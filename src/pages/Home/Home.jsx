import React from "react";
import {useNavigate } from "react-router-dom";

import algoLogo from "../../assets/neural.png";
import cardImg from "../../assets/Algorithm.png";

export default function Home() {

	const navigate = useNavigate();

    return (
        <>
            <div className="pageWrapper w-full bg-blue-200 bg-opacity-50">
                <header className="headerPage w-full bg-white py-2 flex items-center justify-center">
                    <div className="logoWrapper w-12 mr-2">
                        <img className="w-full object-cover object-center" src={algoLogo} alt="" />
                    </div>
                    <div className="pageHeader">
                        <p className="headerText text-black font-outfit font-bold text-2xl">Algorithm Visualizer</p>
                    </div>
                </header>
                <main className="pageContent w-full min-h-screen">
		  			<div onClick={()=>navigate("/sortingVisualizer")} className="navCard shadow-md bg-white mx-auto rounded-lg my-2 overflow-hidden w-[80%]">
						  <div className="navCardImg rounded-t w-full">
							  <img className="w-full object-center object-cover" src={cardImg} alt="" />
						  </div>
						  <div className="cardContent px-2 py-2 text-center">
							  <p className="cardHeader font-semibold text-xl font-outfit">Sorting Visualizer</p>
							  <p className="cardDesc font-outfit font-normal text-lg">Visualize various sorting algorithms</p>
						  </div>
					</div>
	  			</main>
				<footer className="min-h-16">
					<p className="thanks">Thank You for viewing</p>
				</footer>
            </div>
        </>
    );
}
