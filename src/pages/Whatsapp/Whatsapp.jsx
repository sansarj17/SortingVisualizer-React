import React from "react";

import {
    BsFillChatLeftTextFill,
    BsThreeDotsVertical,
    BsSearch,
} from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { ImCross } from "react-icons/im";

import pfp0 from "../../assets/wpAssets/pfp0.jpg";
import pfp1 from "../../assets/wpAssets/pfp1.jpg";
import Sidebar from "../../components/Sidebar";

export default function Whatsapp() {
    return (
        <>
            <div className="pageWrapper w-screen h-screen grid grid-cols-10">
                <Sidebar/>
                <div className="secondaryContent h-full col-span-6 flex w-full">
                    <div className="centerChat h-full flex flex-col min-w-[50%] w-full">
                        <div className="topHeaderMid bg-topBar-500 w-full py-3 px-5">
                            <div className="personWrapper flex items-center ">
                                <div className="profileWrapperMid mr-8 w-16 h-16 overflow-hidden rounded-full">
                                    <img className="w-full object-center object-cover" src={pfp1} alt="" />
                                </div>
                                <p className="name text-2xl font-medium text-white">Abhimanyu Jec Cse</p>
                            </div>
                        </div>
                        <div className="chatMid h-[80.8%] overflow-y-scroll"></div>
                        <div className="sendMessage bg-topBar-500 py-4 flex justify-between items-center px-5">
                            <div className="inputWrapper w-full">
                                <input
									className="bg-transparent px-2 py-2 w-[95%] focus:border-none border-none font-open text-xl rounded-md"
                                    type="text"
                                    placeholder="Type Something..."
                                />
                            </div>
                            <div className="sendWrapper bg-transparent hover:bg-green-200 p-3 rounded-full flex justify-center items-center">
                                <FiSend className="text-3xl hover text-wpGray-500"/>
                            </div>
                        </div>
                    </div>
                    <div className="personInfo w-[50%] bg-wpBlack-700 h-full overflow-y-scroll absolute z-10 right-0">
                        <div className="topHeaderRight flex items-center bg-topBar-500 w-full py-7 px-5">
                            <div className="iconWrapper">
                                <ImCross className="text-3xl text-wpGray-500 mr-8" />
                            </div>
                            <div className="text">
                                <p className="headText font-open text-2xl font-semibold text-white">Contact info</p>
                            </div>
                        </div>
						<div className="personProfile bg-wpBlack-500 py-8 text-center">
                                <div className="bigImgWrapper mx-auto w-64 h-64 rounded-full overflow-hidden">
                                    <img className="w-full object-cover object-center" src={pfp1} alt="" />
                                </div>
                                <div className="personInfo mt-4">
                                    <p className="name font-open text-white text-3xl font-semibold">Abhimanyu Jec Cse</p>
                                    <p className="number font-open mt-2 text-white text-xl opacity-75">+91 74157 29225</p>
                                </div>
                            </div>
                            <div className="about bg-wpBlack-500 mt-2 px-10 py-6">
                                <p className="head font-open mb-2 text-md text-white font-normal opacity-60">About</p>
                                <p className="aboutText font-open text-white text-xl">
                                    Perseverance makes the difference between
                                    success💖 and defeat🙏🙏
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}
