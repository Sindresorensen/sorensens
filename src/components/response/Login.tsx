import { EyeIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useContext, useState } from "react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { setLoggedInCookie } from "@/lib/cookiesUtils";
import { CardContent } from "../ui/card";
import { LanguageContext } from "@/App";


const password = "bryllupsfeber";

export default function Login() {

    const { isNynorsk } = useContext(LanguageContext);

    const [passVisible, setPassVisible] = useState<boolean>(false);
    const [passInput, setPassInput] = useState<string>("");
    const [showWrongPass, setShowWrongPass] = useState<boolean>(false);

    const handleSubmit = () => {
        if (passInput === password) {
            setLoggedInCookie(true);
            location.reload();
        } else {
            setShowWrongPass(true);
        }
    }

    const handleOnChange = (val: string) => {
        if (showWrongPass) {
            setShowWrongPass(false);
        }
        setPassInput(val);
    }

    return (
        <CardContent className="rounded-lg">

            <div className=" flex flex-col items-center gap-8 md:gap-6 my-6 md:m-16">
                {isNynorsk ?
                <p>Dersom du er invitert i bryllaupsfesten har du fått eit <u>passord</u> i invitasjonen!</p> :
                <p>Dersom du er invitert i bryllupsfesten har du fått et <u>passord</u> i invitasjonen!</p>
                }

                <div className="flex flex-col md:flex-row items-start md:gap-4 w-10/12 md:w-auto ">

                    <Label htmlFor="password" className="text-lg font-light flex items-center md:h-10 md:mt-6">Passord:</Label>

                    <div className=" w-full md:w-52">
                        <div className="text-red-500 h-6 flex items-center text-xs">
                            {showWrongPass && <p>Feil passord :(</p>}
                        </div>
                        <div className=" flex flex-col items-start gap-4 ">
                            <form onSubmit={handleSubmit} className="relative flex items-center w-full">

                                <Input
                                    id="password" 
                                    className=" py-6 md:py-0 border-black focus:bg-opacity-5 focus:bg-black rounded-none" 
                                    type={passVisible ? "text" : "password"}
                                    onChange={(e) => {handleOnChange(e.target.value)}}
                                />

                                <div className=" absolute right-1 w-8 flex items-center justify-center ">
                                    {passVisible && <EyeSlashIcon onClick={() => {setPassVisible(false)}} className=" h-5 cursor-pointer hover:opacity-50 transition" />}
                                    {!passVisible && <EyeIcon onClick={() => {setPassVisible(true)}} className=" h-5 cursor-pointer hover:opacity-50 transition" />}
                                </div>
                            </form>            
                            <Button variant="outline" className="border-black bg-white font-normal hover:bg-opacity-5 hover:bg-black" onClick={handleSubmit}>Logg inn</Button>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    );
}