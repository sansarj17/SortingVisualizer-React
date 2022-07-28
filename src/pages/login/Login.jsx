import React from "react";

import { BsWhatsapp } from "react-icons/bs";

import wpLogo from "../../assets/wpAssets/wpLogo.png"

export default function Login() {
    return (
        <>
            <div className="pageWrapperlogin bg-gray-200 flex items-center justify-center w-screen h-screen">
                <div className="centerContainer flex justify-center items-center w-[20%] h-52 p-4">
                    <div className="wrapper bg-white rounded shadow p-8">
                        <div className="iconWrapper">
                           <img className="drop-shadow-md" src={wpLogo} alt="" />
                        </div>
                        <button className="signInbutton shadow-lg text-bgBlack bg-white cursor-pointer px-4 py-2 font-open text-xl font-semibold mt-12 rounded">Sign In With Google</button>
                    </div>
                </div>
            </div>
        </>
    );
}
