import { Separator } from "@/components/ui/separator";
import { CardContent } from "@/components/ui/card"
import { useContext } from "react";
import { LanguageContext } from "@/App";

/* NYNORSK DONE */
export default function ResponseForm() {

    const { isNynorsk } = useContext(LanguageContext);

    return (
        <CardContent className="p-2 md:p-6 md:pt-0">
            <div className=" flex flex-col items-center md:mx-10 ">
                
                <div className="w-full min-h-[90vh]">
                    <Separator orientation="horizontal" className="bg-black w-[85%] md:w-full m-auto" />
                    {isNynorsk ? 
                    <iframe 
                        className=" nettskjema-iframe w-full rounded-md min-h-[90vh]"
                        src="https://nettskjema.no/a/394698?embed=1"
                    /> :
                    <iframe 
                        className=" nettskjema-iframe w-full rounded-md min-h-[90vh]"
                        src="https://nettskjema.no/a/393063?embed=1"
                    />}
                </div>
                <div className=" w-full h-60 bg-white  rounded-b-md flex items-end justify-center">
                    <div className="h-[90%] w-80 bg-white rounded-b-md bg-cover bg-center bg-[url('./src/assets/images/IMG_0183-nobg.png')]" />
                </div>
            </div>
        </CardContent>
    );

}