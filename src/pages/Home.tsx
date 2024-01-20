import "../App.css";
import { Header } from "@/components/home/header/Header";
import WelcomeBox from "@/components/home/body/WelcomeBox";
import LocationInfo from "@/components/home/body/LocationInfo";
import Countdown from "@/components/home/body/countdown/Countdown";
import Footer from "@/components/home/body/Footer";

/* NYNORSK DONE */
export default function Home() {
    return (
        <div>
            <Header />
            <WelcomeBox />
            <LocationInfo />
            <Countdown />
            <Footer />
        </div>
    );
}