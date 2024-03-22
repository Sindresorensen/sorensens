import "../App.css";
import { Header } from "@/components/home/header/Header";
import WelcomeBox from "@/components/home/body/WelcomeBox";
import Countdown from "@/components/home/body/countdown/Countdown";
import Footer from "@/components/home/body/Footer";
import LocationBox from "@/components/home/body/LocationBox";

export default function Home() {
    return (
        <div>
            <Header />
            <WelcomeBox />
            <LocationBox />
            <Countdown />
            <Footer />
        </div>
    );
}