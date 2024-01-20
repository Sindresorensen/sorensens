import { LanguageContext } from "@/App";
import "@/App.css";
import NavButton from "@/components/general/nav-button/nav-button";
import { useContext } from "react";
import { Link } from "react-router-dom";

/* NYNORSK DONE */
function WelcomeBox() {

    const { isNynorsk } = useContext(LanguageContext);

    return (
        <div className="xl:min-h-[80vh] h-auto xl:h-[60vh] bg-trueblue flex relative overflow-hidden">
            <div className=" my-10 mx-6 xl:mx-40 w-full flex flex-col xl:flex-row justify-between">

                <div className=" w-full md:w-2/3 m-auto mt-4 xl:mt-8 flex flex-col justify-start text-left gap-6  ">
                    <p className="text-white text-4xl lg:text-6xl font-bold">
                        {isNynorsk ? "Velkommen til bryllaupet vårt!" : "Velkommen til vårt bryllup!"}
                    </p>
                    {isNynorsk ? 
                    /* Nynorsk */
                    <p className="text-white text-lg font-extralight w-full lg:w-[85%]">
                        Me giftar oss 07. september i Time kyrkje og håpar du vil vera med å feira den store dagen saman med oss. 
                        På denne sida finn du nyttig informasjon om tid og stad, og dessutan ønskelister og meir.
                        Under fanen&nbsp;
                        <span>
                            <Link to="/response">
                                <NavButton color="white" className="text-lg font-extralight">svar utbes</NavButton>
                            </Link>
                        </span>
                        &nbsp;har du òg moglegheit til å svara på invitasjonen. Me gler oss!
                    </p>
                    :
                    /* Bokmål */
                    <p className="text-white text-lg font-extralight w-full lg:w-[85%]">
                        Vi gifter oss 07. september i Time kyrkje og håper du vil være med å feire den store dagen sammen med oss. 
                        På denne siden finner du nyttig informasjon om tid og sted, samt ønskelister og mer. 
                        Under fanen&nbsp;
                        <span>
                            <Link to="/response">
                                <NavButton color="white" className="text-lg font-extralight">svar utbes</NavButton>
                            </Link>
                        </span>
                        &nbsp;har du også mulighet til å svare på invitasjonen. Vi gleder oss!
                    </p>}
                </div>

                <img 
                    src="./src/assets/images/IMG_0242.JPG" 
                    alt="Image not found :(" 
                    className="object-cover w-full md:w-2/3 m-auto xl:m-0 xl:w-5/12 mt-10" 
                />

            </div>
        </div>
    )
}

export default WelcomeBox;