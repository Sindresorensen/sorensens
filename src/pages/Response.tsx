import BgImage from "@/components/general/BgImage";
import ResponseForm from "@/components/response/ResponseForm";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useContext, useEffect } from "react";
import { LanguageContext } from "@/App";
import Title from "@/components/general/Title";

function Response() {

    // On mount
    useEffect(() => {
        window.scrollTo({ top: 0 });
    });

    const { isNynorsk } = useContext(LanguageContext);
    const title = isNynorsk ? 
        "Svar til deltaking på bryllaupsfest!" :
        "Svar til deltakelse på bryllupsfest!";

    return(
        <div className=" z-0 h-full w-full">

            {/* Header and information */}
            <div className="absolute flex flex-col items-center w-full z-10 gap-8 md:gap-16">
                <div className="flex flex-col items-center mt-24 w-full gap-6">

                    <Title>Svar utbes</Title>
                    
                    {isNynorsk ? 
                    <p className="text-classicwhite text-md md:font-extralight mx-10 md:w-[30rem] xl:w-[38rem] ">
                        Her vil me gjerne at du skal svare på om du kjem i bryllaupet eller ikkje og eventuelle matomsyn.
                        Me håper du vil komme og feire dagen med oss!
                    </p> :
                    <p className="text-classicwhite text-md md:font-extralight mx-10 md:w-[30rem] xl:w-[38rem] ">
                        Her vil vi gjerne at du skal svare på om du kommer i bryllupet eller ikke og eventuelle mathensyn. 
                        Vi håper du vil komme og feire dagen med oss!
                    </p>}

                </div>

                <Card className=" w-11/12 md:w-[60vw] font-sarabun bg-white text-black  rounded-sm mb-20">
                    <CardHeader className="text-left mt-10 mx-4 md:mx-12">
                        <CardTitle className="font-normal">{title}</CardTitle>
                    </CardHeader>
                    
                    <ResponseForm />
                </Card>

            </div>

            {/* Fixed background */}
            <BgImage image="IMG_0292.JPG" bottom={100} />
        </div>
    )
}

export default Response;