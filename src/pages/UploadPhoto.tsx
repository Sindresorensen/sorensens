import Title from "../components/general/Title";


export default function UploadPhoto() {

    return (
        <div className=" z-0 h-full w-full">
            <div className="absolute flex flex-col items-center w-full z-10 gap-8 md:gap-16">

                <div className="flex flex-col items-center mt-24 w-full gap-6 ">
                    <Title>Last opp bilde</Title>
                </div>

                <div className=" w-80 sm:w-96 h-96">
                    <iframe
                        className="nettskjema-iframe w-full h-full rounded-md"
                        src="https://nettskjema.no/a/396591?embed=1"
                        title="Opplasting av bilder"
                    />
                </div>
            </div>
        </div>
    );
}