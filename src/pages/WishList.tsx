

import { LanguageContext } from "@/App";
import BgImage from "@/components/general/BgImage";
import ListCard from "@/components/wishlist/ListCard";
import { useContext } from "react";

export type ListType = {
    name: string;
    description: string;
    link: string;
}

const lists: ListType[] = [
    {
        name: "Kitch'n",
        description: "Her har vi samlet det vi ønsker oss fra Kitch'n. Mange av produktene finnes også hos Tilbords!",
        link: "https://www.kitchn.no/bryllup/179312"
    },
    {
        name: "Generell ønskeliste",
        description: "Her er en samlet ønskeliste med produkter vi ønsker oss fra forskjellige butikker.",
        link: "https://onskelister.no/liste?id=8bZLMTJcU9tDfIJ0YPIF"
    }
]

const listsNynorsk: ListType[] = [
    {
        name: "Kitch'n",
        description: "Her har me samla det me ønsker oss frå Kitch'n. Mange av produkta finst òg hos Tilbords!",
        link: "https://www.kitchn.no/bryllup/179312"
    },
    {
        name: "Generell ønskeliste",
        description: "Her er ei samla ønskeliste med produkt me ønsker oss frå ulike butikkar.",
        link: "https://onskelister.no/liste?id=8bZLMTJcU9tDfIJ0YPIF"
    }
]


function WishList() {

    const { isNynorsk } = useContext(LanguageContext);
    return(
        <div className=" z-0 flex flex-col gap-20 bg-fade-in h-screen overscroll-contain w-full relative opacity-100 bg-black">
            
            <div className=" text-center mt-[10vh] w-full z-20">
                <p className="font-tangerine text-8xl text-white">Ønskelister</p>
            </div>
            
            <div className=" h-auto mb-20 z-20">
                {isNynorsk ? 
                <div className=" flex flex-col lg:flex-row items-center justify-center md:justify-evenly md:mx-20 gap-10 lg:gap-20 z-20">
                    {listsNynorsk.map( (list, index) => (
                        <ListCard key={index} list={list} />
                    ))}
                </div> :
                <div className=" flex flex-col lg:flex-row items-center justify-center md:justify-evenly md:mx-20 gap-10 lg:gap-20 z-20">
                    {lists.map( (list, index) => (
                        <ListCard key={index} list={list} />
                    ))}
                </div>}
            </div>
            <BgImage image="darkened/IMG_0229-darken.JPG" opacity={100} />
        </div>
    );
}

export default WishList;