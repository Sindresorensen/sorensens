import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Menu from "./Menu";

const shuffle = (arr: string[]) => {
    for (let i = arr.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
    return arr;
}

type SlideProps = {
    images: string[];
    seconds: number;
    setSeconds: (val: number) => void;
    hasTransition: boolean;
    setHasTransition: (val: boolean) => void;
    setIsShowingSlides: (val: boolean) => void;
}

export default function Slide({ images, seconds, setSeconds, hasTransition, setHasTransition, setIsShowingSlides }: SlideProps) {

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const shuffledImages: string[] = useMemo(() => shuffle(images), [images]);
    const [curIndex, setCurIndex] = useState<number>(0);

    // Animation
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (curIndex >= shuffledImages.length - 1) {
                setCurIndex(0);
            }
            setIsFading(true);
        }, seconds * 1000);
        return () => clearInterval(interval);
    }, [images.length, seconds]);

    useEffect(() => {
        if (isFading) {
            setTimeout(() => {
                setCurIndex(prevIndex => prevIndex + 1);
                setIsFading(false);
            }, 500);    // Duration of fade-out animation
        }
    }, [isFading, images.length])

    const enterFullscreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            setIsFullscreen(true);
        }
    };

    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }

    const handleFullscreen = () => (isFullscreen) ? exitFullscreen() : enterFullscreen();
    
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isFullscreen) exitFullscreen();
        else if (e.key === "f" && !isFullscreen) enterFullscreen();
    }

    useEffect(() => {
        const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);

        document.addEventListener("fullscreenchange", onFullscreenChange);
        document.addEventListener("keydown", onKeyDown, false);

        return () => {
            document.removeEventListener("fullscreenchange", onFullscreenChange);
            document.removeEventListener("keydown", onKeyDown, false);
            document.body.style.cursor = 'default';
        };
    }, []);


    const handleMouseMove = () => {
        if (timeoutId) clearTimeout(timeoutId);
        setShowMenu(true);
        document.body.style.cursor = 'default'
        const newTimeoutId = setTimeout(() => {
            setShowMenu(false);
            document.body.style.cursor = 'none'
        }, 3000);
        setTimeoutId(newTimeoutId);
    };

    useEffect(() => {
        // Cleanup the timeout if the component unmounts
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    // Exit button
    const exit = () => {
        document.body.style.cursor = 'default';
        setIsShowingSlides(false);
        exitFullscreen();
    }

    return (
        <div className="z-20 absolute h-screen w-screen top-0 bg-black flex justify-center" onMouseMove={handleMouseMove}>
            <img src={shuffledImages[curIndex]} className={cn("m-6 max-w-full max-h-full", 
                hasTransition && (isFading ? " fade-out" : "fade-in")
            )}/>

            {/* Menu */}
            <Menu showMenu={showMenu}
                seconds={seconds}
                setSeconds={setSeconds}
                hasTransition={hasTransition}
                setHasTransition={setHasTransition}
                isFullscreen={isFullscreen}
                handleFullscreen={handleFullscreen} 
                exit={exit}
            />
        </div>
    )
}