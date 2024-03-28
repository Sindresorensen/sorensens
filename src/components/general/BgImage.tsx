import { cn } from "@/lib/utils";

type BgImageType = {
    image: string;
    opacity?: number;
    bottom?: number;
    right?: number;
    brightness?: number;
}

export default function BgImage( {image, opacity, bottom, right, brightness}: BgImageType ) {
    return (
        <div className={cn(
                " fixed h-screen z-0 w-full bg-cover bg-center ",
                "after:content-[''] after:fixed after:top-0 after:h-screen after:left-0 after:right-0 after:z-[-1] after:bg-cover",
                `after:bg-[url('/images/${image}')]`,
            )}
            style={{ 
                backgroundImage: `url('/images/${image}')`,
                opacity: `${opacity ?? 100}%`,
                filter: `brightness(${brightness ?? 100}%) contrast(105%)`,
                backgroundPosition: `bottom ${bottom ?? 75}% right ${right ?? 44}%`
            }}
        />
    );
}