import { ChangeEvent, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Slide from "@/components/slideshow/Slide";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import DurationSelector from "@/components/slideshow/DurationSelector";
import TransitionSelector from "@/components/slideshow/TransitionSelector";

export const secs = Array.from({ length: 30 }, (_, i) => i + 1);

export default function Slideshow() {

    const [seconds, setSeconds] = useState(10);
    const [hasTransition, setHasTransition] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const [isShowingSlide, setIsShowingSlide] = useState(false);

    const sjekkFiler = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files) {
            const imageFiles = Array.from(files).filter(file =>
                /\.(jpg|jpeg|png|gif|webp)$/.test(file.name.toLowerCase())
            );

            const imageUrls = imageFiles.map(file => URL.createObjectURL(file));
            setImages(imageUrls);
            console.log(imageFiles)
        }
    }

    return (
        <div className=" bg-[#FAF0DC] w-screen h-screen relative">
            <div className="w-full h-full flex items-center justify-center">
                <div className=" flex flex-col items-center justify-center gap-12">
                    <div className="flex items-center gap-1.5">
                        <div>
                            <input className="hidden" id="imageInput" type="file" multiple accept="image/*" onChange={sjekkFiler} />
                            {/* Label som bruker knapp-style */}
                            <label htmlFor="imageInput" className={cn(buttonVariants(), "cursor-pointer")}>Velg mappe</label>
                        </div>
                        {images.length === 0 && <p className="text-sm">Ingen filer valgt</p>}
                        {images.length > 0 && <p className="text-sm">{images.length} filer valgt</p>}

                        <div className={cn("ml-6 flex items-center group cursor-pointer", images.length === 0 && "hidden")} onClick={() => setImages([])}>
                            <XMarkIcon className="h-6 " />
                            <p className="text-slate-500 text-xs opacity-0 group-hover:opacity-100 transition">Fjern</p>
                        </div>
                </div>

                    <div className="flex flex-col items-start gap-6 border-l pl-6 border-gray-400 py-4">
                        <div className="flex gap-3 items-center">
                            <Label className="text-base">Interval:</Label>
                            <DurationSelector 
                                secs={secs}
                                seconds={seconds}
                                setSeconds={setSeconds}
                                className="rounded-none bg-primary text-white w-24"
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <TransitionSelector hasTransition={hasTransition} setHasTransition={setHasTransition} />
                            <Label htmlFor="transitionOn" className="text-base cursor-pointer">Transition</Label>
                        </div>
                    </div>

                    <Button variant="outline" 
                        className="border-black px-10 font-medium hover:bg-primary hover:text-primary-foreground" 
                        disabled={images.length === 0}
                        onClick={() => setIsShowingSlide(true)}
                    >Start
                    </Button>
                </div>
            </div>

            {isShowingSlide && <Slide images={images} 
                seconds={seconds} 
                setSeconds={setSeconds} 
                hasTransition={hasTransition}
                setHasTransition={setHasTransition}
                setIsShowingSlides={setIsShowingSlide} 
            />}

        </div>
    )
}