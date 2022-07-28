import React from 'react'

import {
    BsFillChatLeftTextFill,
    BsThreeDotsVertical,
    BsSearch,
} from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { ImCross } from "react-icons/im";

import pfp0 from "../assets/wpAssets/pfp0.jpg";
import pfp1 from "../assets/wpAssets/pfp1.jpg";
import PersonCard from './PersonCard';

export default function Sidebar() {
  return <>
	  <div className="sidebar h-full overflow-y-hidden bg-wpBlack-500 border-r-2 border-topBar-400 col-span-4">
                    <div className="topHeaderSidebar bg-topBar-500 flex items-center justify-between w-full py-4 px-5">
                        <div className="profileWrapper w-14 h-14 overflow-hidden rounded-full ">
                            <img className="w-full object-cover object-center" src={pfp0} alt="" />
                        </div>
                        <div className="controls flex items-center">
                            <div className="iconWrapper mr-8">
                                <BsFillChatLeftTextFill className="text-wpGray-500 text-3xl"/>
                            </div>
                            <div className="iconWrapper mr-8">
                                <BsThreeDotsVertical className="text-wpGray-500 text-3xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="searchBar border-b-2 border-topBar-500 bg-wpBlack-500 py-2 px-4">
                        <div className="inputWrapper flex items-center py-2 px-2 rounded-lg bg-topBar-500">
                            <div className="iconWrapper ml-2">
                                <BsSearch className="text-wpGray-500 text-md" />
                            </div>
							<input type="text" placeholder="Search" className="bg-transparent font-open text-center text-xl text-font border-none" />
                        </div>
                    </div>
                    <div className="people h-[85%] overflow-y-scroll bg-wpBlack-500 ">
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard select={true}/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                        <PersonCard/>
                    </div>
                </div>
  </>
}
