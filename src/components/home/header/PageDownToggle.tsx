import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

/* NYNORSK DONE */
function PageDownToggle() {

    const handleDownClick = () => {
        window.scrollBy({
            top: 300,
            behavior: "smooth"
        });
    }

    return (
        <div className="absolute w-full bottom-8 z-10">
            <ChevronDoubleDownIcon 
                className=" h-6 font-thin m-auto mb-0 text-white cursor-pointer transition-all duration-500 md:hover:mb-1.5" 
                onClick={handleDownClick}
            />
        </div>
    );
}

export default PageDownToggle;