import { useState, useEffect } from "react";
import { Toast as ToastType } from "./types";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import CoupleInfo from "./components/CoupleInfo";
import WeddingDetails from "./components/WeddingDetails";
import Program from "./components/Program";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [toast, setToast] = useState<ToastType>({
    show: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-rose-50 to-white py-8 px-4 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 ease-in-out">
        {/* Wedding Header with Names */}
        <Header isLoaded={isLoaded} />

        {/* Countdown Timer */}
        <Countdown isLoaded={isLoaded} />

        {/* Couple Information */}
        <CoupleInfo isLoaded={isLoaded} />

        {/* Wedding Details (Date, Time, Venue) */}
        <WeddingDetails isLoaded={isLoaded} />

        {/* Wedding Program */}
        <Program isLoaded={isLoaded} />

        {/* RSVP Form */}
        <RSVP isLoaded={isLoaded} setToast={setToast} />

        {/* Footer with Contact Info */}
        <Footer />
      </div>

      {/* Toast Notifications */}
      <Toast toast={toast} setToast={setToast} />
    </div>
  );
};

export default App;
