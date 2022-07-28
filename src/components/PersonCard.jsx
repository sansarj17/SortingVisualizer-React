import React from 'react'

import pfp1 from "../assets/wpAssets/pfp1.jpg";

export default function PersonCard({select}) {
  return <>
	<div className={`peopleSolo border-r-4 border-r-${true ? "green-500" : "transparent"} ${select ? "bg-topBar-500" : ""} border-b-2 border-topBar-500 hover:bg-topBar-500 flex items-center px-5 py-4`}>
        <div className="imageWrapper mr-5 w-16 h-16 overflow-hidden rounded-full">
            <img className="w-full object-center object-cover" src={pfp1} alt="" />
        </div>
        <div className="textContent">
            <p className="Heading text-white font-open text-xl font-medium">Abhimanyu Jec Cse</p>
            <p className="messageShort text-white font-open text-md opacity-60 font-normal">Bc Kya Kar raha</p>
        </div>
    </div>
  </>
}
