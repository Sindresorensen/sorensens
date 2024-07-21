import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Slide from "@/components/slideshow/Slide";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import DurationSelector from "@/components/slideshow/DurationSelector";
import TransitionSelector from "@/components/slideshow/TransitionSelector";

const filteredObjects = (files: File[]): File[] => {
    return files.filter( file => file.type.includes("image") );
}

export const secs = Array.from({ length: 30 }, (_, i) => i + 1);

export default function Slideshow() {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<string[]>([]);
    const [seconds, setSeconds] = useState(10);
    const [hasTransition, setHasTransition] = useState(false);

    const [isShowingSlide, setIsShowingSlide] = useState(false);

    useEffect(() => {
        if (fileInputRef && fileInputRef.current) {
            fileInputRef.current.setAttribute('webkitdirectory', 'true');
            fileInputRef.current.setAttribute('directory', 'true');
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = Array.from(e.target.files || []);
        const filteredFiles = filteredObjects(uploadedFiles);

        const objectURLS = filteredFiles.map(file => URL.createObjectURL(file) )
        setFiles(objectURLS);
    }

    const onChooseImageClick = () => {
        fileInputRef.current?.click();
    }

    return (
        <div className=" bg-[#FAF0DC] w-screen h-screen relative">
            <div className="w-full h-full flex items-center justify-center">
                <div className=" flex flex-col items-center justify-center gap-12">
                    <div className="flex items-center gap-1.5">
                        <div>
                            <Button onClick={onChooseImageClick}>Velg mappe</Button>
                            <input className="hidden" type="file" id="fileInput" ref={fileInputRef} onChange={handleChange}/>
                        </div>
                        {files.length === 0 && <p className="text-sm">Ingen filer valgt</p>}
                        {files.length > 0 && <p className="text-sm">{files.length} filer valgt</p>}

                        <div className={cn("ml-6 flex items-center group cursor-pointer", files.length === 0 && "hidden")} onClick={() => setFiles([])}>
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
                        disabled={files.length === 0}
                        onClick={() => setIsShowingSlide(true)}
                    >Start
                    </Button>
                </div>
            </div>

            {isShowingSlide && <Slide images={files} 
                seconds={seconds} 
                setSeconds={setSeconds} 
                hasTransition={hasTransition}
                setHasTransition={setHasTransition}
                setIsShowingSlides={setIsShowingSlide} 
            />}

        </div>
    )
}