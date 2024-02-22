

export default function BgImage( props: { image: string, opacity?: number, bottom?: number, right?: number } ) {

    const opacity = props.opacity ?? 100;
    const bottom = props.bottom ?? 75;
    const right = props.right ?? 44;

    return (
        <div className=" fixed h-full z-0 w-full bg-cover bg-center"
            style={{ 
                backgroundImage: `url('/images/${props.image}')`,
                opacity: `${opacity}%`,
                backgroundPosition: `bottom ${bottom}% right ${right}%`
            }}
        />
    );
}