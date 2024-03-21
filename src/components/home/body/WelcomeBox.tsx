import { LanguageContext } from "@/App";
import "@/App.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

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
                        Me giftar oss 07. september i Time kyrkje og håper du vil vere med å feire den store dagen saman med oss.
                        På denne sida finn du nyttig informasjon om tid og stad, ønskelister og meir.
                        Under fanen&nbsp;&nbsp;<Link to="/su"><span className="underline underline-offset-2">svar utbes</span></Link>
                        &nbsp;har du òg moglegheit til å svare på invitasjonen. 
                        <br /><br />
                        Dersom du ønsker å halde ein tale eller bidra med annan underhaldning, kan du ta&nbsp;
                        <Link to="/kontakt"><span className="underline underline-offset-2">kontakt</span></Link>
                        &nbsp;med våre toastmeistrar. 
                        Dersom du ønsker å bidra med andre ting, er du velkomen til å ta kontakt med oss!
                        <b> Me gler oss!</b>
                    </p>
                    :
                    /* Bokmål */
                    <p className="text-white text-lg font-extralight w-full lg:w-[85%]">
                        Vi gifter oss 07. september i Time kyrkje og håper du vil være med å feire den store dagen sammen med oss. 
                        På denne siden finner du nyttig informasjon om tid og sted, ønskelister og mer.
                        Under fanen&nbsp;<Link to="/su"><span className="underline underline-offset-2">svar utbes</span></Link>
                        &nbsp;har du også mulighet til å svare på invitasjonen.
                        <br /><br />
                        Dersom du ønsker å holde en tale eller bidra med annen underholdning, kan du ta&nbsp;
                        <Link to="/kontakt"><span className="underline underline-offset-2">kontakt</span></Link>
                        &nbsp;med våre toastmastere. Dersom du ønsker å bidra med andre ting kan du ta kontakt med oss!
                        <b> Vi gleder oss!</b>
                    </p>}
                </div>

                <img 
                    src="/images/IMG_0242.JPG" 
                    alt="Image not found :(" 
                    className="object-cover w-full md:w-2/3 m-auto xl:m-0 xl:w-5/12 mt-10" 
                />

            </div>
        </div>
    );
}

export default WelcomeBox;