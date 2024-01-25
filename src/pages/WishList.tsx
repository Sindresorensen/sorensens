

import { LanguageContext } from "@/App";
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
        description: "Her har me samla det me ønskjer oss frå Kitch'n. Mange av produkta finst òg hos Tilbords!",
        link: "https://www.kitchn.no/bryllup/179312"
    },
    {
        name: "Generell ønskeliste",
        description: "Her er ei samla ønskeliste med produkt me ønskjer oss frå ulike butikkar.",
        link: "https://onskelister.no/liste?id=8bZLMTJcU9tDfIJ0YPIF"
    }
]


function WishList() {

    const { isNynorsk } = useContext(LanguageContext);
    return(
        <div className="z-0 w-full h-full fixed overflow-x-hidden overflow-y-scroll bg-cover flex flex-col gap-20"
            style={{ 
                backgroundImage: "url('/images/darkened/IMG_0229-darken.JPG')",
                backgroundPosition: `bottom ${85}% right ${50}%`
            }}
        >
            
            <div className=" text-center mt-[10vh] w-full">
                <p className="font-tangerine text-8xl text-white">Ønskelister</p>
            </div>
            
            <div className=" h-auto mb-20">
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
        </div>
    );
}

export default WishList;