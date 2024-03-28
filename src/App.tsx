import './App.css'
import { createContext, useState } from 'react';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Button } from './components/ui/button';
import { Navbar } from './components/general/Navbar';
import Home from './pages/Home';
import Response from './pages/Response';
import { findIsNynorsk } from './lib/utils';
import { setLanguageCookie } from './lib/cookiesUtils';
import UploadPhoto from './UploadPhoto';
import Contact from './pages/Contact';
import BgImage from './components/general/BgImage';


const NoPage = () => {
    return (
        <div className=" text-classicwhite bg-cover bg-[url('/images/sky.JPG')] h-screen">
            <div className="pt-[20vh] flex flex-col items-center gap-10 text-black">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-6xl">OoOops!</p>
                    <p className="text-lg  opacity-80">Her er det dessverre ingen side å finne!</p>
                </div>
                <div>
                    <Link to="/">
                        <Button variant={"outline"} className="text-lg border-2 border-black hover:text-white hover:bg-black px-10 py-6">Gå hjem</Button>
                    </Link>
                </div>
                <img src="/images/IMG_0229-nobg.png" alt="Fant ikke bildet :(" className=" h-64 bg-cover" />
            </div>
        </div>
    )
}


const Layout = () => {
    return (
        <>
        <Navbar />
        <BgImage image="IMG_0220.JPG" right={50} brightness={65} />
        <Outlet />
        </>
    );
}

type ContextType = {
    isNynorsk: boolean;
    handleSetIsNynorsk: (val: boolean) => void;
}


export const LanguageContext = createContext<ContextType>({isNynorsk: false, handleSetIsNynorsk: () => {}});

export default function App() {

    const [isNynorsk, setIsNynorsk] = useState<boolean>(findIsNynorsk());
    const handleSetIsNynorsk = (isNynorsk: boolean) => {
        // Update cookies
        setLanguageCookie(isNynorsk ? 'nn' : 'nb');
        // Update state
        setIsNynorsk(isNynorsk);
    }

  return (
    <LanguageContext.Provider value={{ isNynorsk, handleSetIsNynorsk }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/su" element={<Response />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/last_opp" element={<UploadPhoto />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </LanguageContext.Provider>
  );
}
