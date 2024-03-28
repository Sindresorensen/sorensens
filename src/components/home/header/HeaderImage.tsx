import "@/App.css";
import BgImage from "@/components/general/BgImage";
import { useState, useEffect } from "react";

export function HeaderImage() {

    const [opacity, setOpacity] = useState(100);

    const handleScroll = () => {
        const fromTop = Math.abs(document.body.getBoundingClientRect().top);
        if (fromTop === 0) {
            setOpacity(100);
        } else {
            setOpacity(opacity - (fromTop / 16));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <BgImage image="IMG_0193.JPG" opacity={opacity} brightness={60} />
}

