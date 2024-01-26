import BgImage from "@/components/general/BgImage";
import Login from "@/components/response/Login";
import ResponseForm from "@/components/response/ResponseForm";
import { Button } from "@/components/ui/button";
import { deleteLoggedInCookie } from "@/lib/cookiesUtils";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useContext } from "react";
import { LanguageContext } from "@/App";
import { isLoggedIn } from "@/lib/utils";

function Response() {

    const { isNynorsk } = useContext(LanguageContext);
    const title = isNynorsk ? 
        "Svar til deltaking på bryllaupsfest!" :
        "Svar til deltakelse på bryllupsfest!";

    return(
        <div className=" z-0 h-full w-full">

            {/* Header and information */}
            <div className="absolute flex flex-col items-center w-full z-10 gap-8 md:gap-16">
                <div className="flex flex-col items-center mt-[10vh]  w-full gap-6">

                    <p className="font-tangerine text-8xl text-white">Svar utbes</p>
                    
                    {isNynorsk ? 
                    <p className="text-classicwhite text-md md:font-extralight mx-10 md:w-[30rem] xl:w-[38rem] ">
                        Her vil me gjerne at du skal svara på om du kjem i bryllaupet eller ikkje og eventuelle matomsyn.
                        Me håper du vil komme og feire dagen med oss!
                    </p> :
                    <p className="text-classicwhite text-md md:font-extralight mx-10 md:w-[30rem] xl:w-[38rem] ">
                        Her vil vi gjerne at du skal svare på om du kommer i bryllupet eller ikke og eventuelle mathensyn. 
                        Vi håper du vil komme og feire dagen med oss!
                    </p>}

                </div>

                {/* Login-page or response-form */}
                <Card className=" w-11/12 md:w-[60vw] font-sarabun bg-white text-black  rounded-sm mb-20">
                    {!isLoggedIn() && <Login />}
                    {isLoggedIn() && 
                    <>
                        <CardHeader className="text-left mt-10 mx-4 md:mx-12">
                            <CardTitle className="font-normal">{title}</CardTitle>
                        </CardHeader>
                        
                        <ResponseForm />
                    </>}
                </Card>

            </div>

            
            {/* Div placed in right top corner */}
            {isLoggedIn() && <div className="flex absolute right-20 sm:right-8 top-6 sm:top-20 z-30 items-center gap-8">
                <Button 
                    variant={"outline"} 
                    className="text-white px-8"
                    onClick={deleteLoggedInCookie}
                >Logg ut</Button>
            </div>}
            

            {/* Fixed background */}
            <div className=" fixed h-full w-full bg-black" />
            <BgImage image="IMG_0292.JPG" bottom={100} />
        </div>
    )
}

export default Response;