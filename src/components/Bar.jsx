import React, { useEffect, useState } from "react";

export default function Bar({ index, barWidth, heightValue, colorCode }) {
    const [barColor, setBarColor] = useState("rgb(59 130 246)");
	const [barType,setBarType] = useState("idle")

    useEffect(() => {
        switch (colorCode) {
			case 0:
				setBarType("idle")
				setBarColor("rgb(59 130 246)")
				break;
            case 1:
				setBarType("comparedFrom")
                setBarColor("rgb(244 63 94)");
                break;
            case 2:
				setBarType("comparedTo")
                setBarColor("rgb(34 197 94)");
                break;
			case 3:
				setBarType("comparedFrom")
				setBarColor("rgb(234 179 8)");
				break;
            default:
				setBarColor("rgb(59 130 246)")
                break;
        }
    }, [colorCode]);

    return (
        <div
            key={index}
            style={{ width: barWidth, height: heightValue, backgroundColor:barColor }}
            className={`${barType} bar font-outfit text-center mx-[1px] md:rounded-sm rounded-[0.063rem]`}
        >
        </div>
    );
}
