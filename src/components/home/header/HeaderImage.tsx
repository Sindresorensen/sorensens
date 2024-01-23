import "@/App.css";
import BgImage from "@/components/general/BgImage";
import { useState, useEffect } from "react";

export function HeaderImage() {

    const [opacity, setOpacity] = useState(60);

    const handleScroll = () => {
        const fromTop = Math.abs(document.body.getBoundingClientRect().top);
        if (fromTop === 0) {
            setOpacity(60);
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

    return (
        <BgImage image="IMG_0193.JPG" opacity={opacity} />
    );
}

