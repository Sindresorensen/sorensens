import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@heroicons/react/24/outline";


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="  w-full flex flex-col sm:flex-row items-center justify-between sm:h-[20vh] text-classicwhite relative gap-10">

            <div className=" sm:ml-28 flex flex-col justify-end h-full sm:pb-6 ">
                <p className="font-tangerine opacity-80 text-4xl text-white">Hanna & Sindre</p>
                <p className="text-xs opacity-50">- Laget av Sindre Sørensen -</p>
            </div>

            <div className=" sm:mr-12 mb-4 sm:mb-0">
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