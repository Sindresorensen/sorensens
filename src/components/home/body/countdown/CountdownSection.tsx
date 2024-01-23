
type CountdownSectionProps = {
    timeLeft: number;
    caption: string;
}

function CountdownSection(props: CountdownSectionProps) {

    return (
        <div className="border-4 border-classicwhite text-classicwhite w-44 h-44 flex flex-col items-center justify-between">
            
            <div className=" w-full h-full flex items-end justify-center">
                <p className="text-5xl font-bold">{props.timeLeft}</p>
            </div>
            <div className="h-full w-full flex items-center justify-center">
                <p className=" text-2xl">{props.caption}</p>

            </div>
        </div>
    );
}

export default CountdownSection;