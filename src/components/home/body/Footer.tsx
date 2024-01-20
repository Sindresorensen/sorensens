import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@heroicons/react/24/outline";


/* NYNORSK DONE */
function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="  w-full flex items-center justify-between h-[20vh] text-classicwhite relative ">

            <div className=" ml-2 sm:ml-28 flex flex-col justify-end h-full pb-4">
                <p className="font-tangerine opacity-80 text-4xl text-white">Hanna & Sindre</p>

            </div>

            <div className=" mr-4 sm:mr-12">
                <Button variant={"outline"} className="flex items-center gap-1.5" 
                    onClick={scrollToTop}
                >
                    <ArrowUpIcon className="h-4" />
                    <p>Til toppen</p>
                </Button>
            </div>
            
        </div>
    );
}

export default Footer;