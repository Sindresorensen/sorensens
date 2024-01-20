import { LanguageContext } from "@/App";
import { useContext } from "react";

function LanguageToggle() {

    const { isNynorsk, handleSetIsNynorsk } = useContext(LanguageContext);

    return (
        <div className="text-white sm:text-sm">

            <div className=" flex items-center justify-between select-none">

                <div className={`sm:hover:opacity-70 w-11 sm:w-8 sm:transition-all sm:cursor-pointer underline-offset-4 ${!isNynorsk ? "font-bold underline" : ""}`}
                    onClick={() => handleSetIsNynorsk(false)}
                >
                    <p className="z-30">Bm</p>
                </div>

                <p className="font-black">/</p>

                <div className={`sm:hover:opacity-70 w-11 sm:w-8 sm:transition-all sm:cursor-pointer underline-offset-4 ${isNynorsk ? "font-bold underline" : ""}`}
                    onClick={() => handleSetIsNynorsk(true)}
                >
                    <p className="z-30">Nn</p>
                </div>
                
            </div>
        </div>
    );
}

export default LanguageToggle;