

export default function Title({children}: {children: JSX.Element | string}) {
    return (
        <p className="text-5xl sm:text-6xl text-white font-light">
            {children}
        </p>
    );
}