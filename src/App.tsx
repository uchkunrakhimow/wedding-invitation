import { useState, useEffect } from "react";
import {
  Heart,
  Calendar,
  MapPin,
  Clock,
  Phone,
  Check,
  X,
  Mail,
  Music,
  Cake,
  Users,
} from "lucide-react";

const App = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showRSVP, setShowRSVP] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState(false);
  const [guests, setGuests] = useState(1);
  const [wishes, setWishes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    const weddingDate = new Date("2025-06-15T16:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = () => {
    if (attending === null) {
      setToast({
        show: true,
        message: "Iltimos, qatnashish yoki qatnashmaslikni tanlang",
        type: "warning",
      });
      return;
    }

    setSubmitted(true);
    setToast({
      show: true,
      message: attending
        ? "Javobingiz uchun rahmat! To'yda ko'rishguncha!"
        : "Javobingiz uchun rahmat!",
      type: attending ? "success" : "info",
    });

    setTimeout(() => {
      setShowRSVP(false);
    }, 500);
  };

  const handleAttendanceClick = (isAttending: boolean) => {
    setAttending(isAttending);
    if (!isAttending) {
      setTimeout(() => {
        setSubmitted(true);
        setShowRSVP(false);
        setToast({
          show: true,
          message: "Javobingiz uchun rahmat!",
          type: "info",
        });
      }, 300);
    }
  };

  const handleShowRSVP = () => {
    setShowRSVP(true);
    setSubmitted(false);
    setAttending(false);
  };

  const countdownAnimation = (value: number) => {
    return (
      <div
        className={`flex flex-col items-center justify-center h-24 w-24 bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg shadow-md transform transition-all duration-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="text-3xl font-bold text-rose-600">{value}</div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from, from-rose-50 to-white py-8 px-4 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 ease-in-out">
        <div className="relative overflow-hidden bg-gradient-to-r from-rose-100 to-pink-100 p-8 text-center">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-300 to-pink-300"></div>
          </div>

          <div className="relative">
            <div className="inline-block animate-bounce">
              <Heart
                className="text-rose-500 h-12 w-12 mb-2 mx-auto"
                fill="#f43f5e"
              />
            </div>

            <h1
              className={`font-serif text-5xl font-bold text-rose-600 mb-3 transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-90"
              }`}
            >
              Uchkun & Durdona
            </h1>

            <p className="text-xl text-rose-700 mb-4 font-serif italic">
              sizni to'yimizga taklif qilamiz
            </p>

            <div className="flex justify-center mb-8">
              <div className="h-0.5 w-32 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full"></div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-xl text-rose-700 mb-4 font-medium text-center">
                To'y kunigacha:
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:space-x-4">
                <div className="flex flex-col items-center min-w-[60px]">
                  {countdownAnimation(days)}
                  <p className="mt-2 text-sm sm:text-base font-medium text-rose-700">
                    Kun
                  </p>
                </div>

                <div className="flex flex-col items-center min-w-[60px]">
                  {countdownAnimation(hours)}
                  <p className="mt-2 text-sm sm:text-base font-medium text-rose-700">
                    Soat
                  </p>
                </div>

                <div className="flex flex-col items-center min-w-[60px]">
                  {countdownAnimation(minutes)}
                  <p className="mt-2 text-sm sm:text-base font-medium text-rose-700">
                    Daqiqa
                  </p>
                </div>

                <div className="flex flex-col items-center min-w-[60px]">
                  {countdownAnimation(seconds)}
                  <p className="mt-2 text-sm sm:text-base font-medium text-rose-700">
                    Soniya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kelin-kuyov ma'lumotlari */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 text-center">
              <div className="relative inline-block mb-4 transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-200 to-rose-400 opacity-20 transform -rotate-6 scale-105"></div>
                <img
                  src="/boy.png"
                  alt="Kuyov"
                  className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 bg-rose-500 text-white rounded-full p-2 shadow-lg">
                  <Heart size={16} fill="white" />
                </div>
              </div>
              <h2 className="text-2xl font-serif font-bold mb-1 text-gray-800">
                Uchqun Rahimov
              </h2>
              <p className="text-gray-600">Rahimovlar oilasining o'g'li</p>
            </div>

            <div className="md:w-1/2 p-8 text-center">
              <div className="relative inline-block mb-4 transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-200 to-rose-400 opacity-20 transform rotate-6 scale-105"></div>
                <img
                  src="/girl.png"
                  alt="Kelin"
                  className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                />
                <div className="absolute -bottom-2 -left-2 bg-rose-500 text-white rounded-full p-2 shadow-lg">
                  <Heart size={16} fill="white" />
                </div>
              </div>
              <h2 className="text-2xl font-serif font-bold mb-1 text-gray-800">
                Durdona Olimova
              </h2>
              <p className="text-gray-600">Olimovalar oilasining qizi</p>
            </div>
          </div>
        </div>

        <div
          className={`bg-rose-50 p-8 transition-all duration-1000 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-serif font-bold text-center mb-8 text-rose-700">
            To'y marosimi
          </h2>

          <div className="max-w-lg mx-auto space-y-6">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-rose-100 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Sana</h3>
                <p className="text-gray-600">15-iyun, 2025-yil, Yakshanba</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-rose-100 rounded-full mr-4">
                <Clock className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Vaqt</h3>
                <p className="text-gray-600">Soat 16:00 dan 22:00 gacha</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-rose-100 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Manzil</h3>
                <p className="text-gray-600">
                  "Sharq Saroyi" to'y saroyi, Toshkent sh., Yunusobod tumani
                </p>
                <a
                  href="https://maps.app.goo.gl/YiPHj8piSpofR7t57"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-1 text-rose-600 hover:text-rose-700 font-medium"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  Xaritada ko'rish
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`p-8 bg-white transition-all duration-1000 delay-800 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-serif font-bold text-center mb-8 text-rose-700">
            To'y dasturi
          </h2>

          <div className="max-w-lg mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-rose-50 p-4 rounded-lg shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">16:00</h3>
                <p className="text-sm text-gray-600">Mehmonlar tashrifi</p>
              </div>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">17:00</h3>
                <p className="text-sm text-gray-600">Kelin-kuyov tashrifi</p>
              </div>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Music className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">18:30</h3>
                <p className="text-sm text-gray-600">Konsert dasturi</p>
              </div>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Cake className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">20:00</h3>
                <p className="text-sm text-gray-600">To'y tortini kesish</p>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP */}
        <div
          className={`p-8 bg-gradient-to-b from-white to-rose-50 text-center transition-all duration-1000 delay-900 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-serif font-bold mb-4 text-rose-700">
            Ishtirok etasizmi?
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Iltimos, javobingizni 1-iyun, 2025-yilgacha yuboring
          </p>

          {!showRSVP && !submitted ? (
            <button
              onClick={handleShowRSVP}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5"
            >
              Javob berish
            </button>
          ) : null}

          {showRSVP && !submitted && (
            <div
              className={`max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg transition-all duration-500 ${
                showRSVP ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-left">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-colors"
                    placeholder="Ismingizni kiriting"
                    required
                  />
                </div>

                <div className="text-left">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="phone"
                  >
                    Telefon raqamingiz
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-colors"
                    placeholder="+9981234567"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Tashrif buyurasizmi?
                  </label>
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => handleAttendanceClick(true)}
                      className={`flex-1 py-3 rounded-lg transition-all duration-200 flex items-center justify-center ${
                        attending === true
                          ? "bg-rose-500 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 ${
                          attending === true ? "text-white" : "text-gray-600"
                        } mr-2`}
                      />
                      Ha, albatta
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAttendanceClick(false)}
                      className={`flex-1 py-3 rounded-lg transition-all duration-200 flex items-center justify-center ${
                        attending === false
                          ? "bg-gray-700 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <X
                        className={`w-4 h-4 ${
                          attending === false ? "text-white" : "text-gray-600"
                        } mr-2`}
                      />
                      Afsuski, yo'q
                    </button>
                  </div>
                </div>

                {attending === true && (
                  <div className="space-y-5 animate-fade-in-down">
                    <div className="text-left">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="guests"
                      >
                        Mehmonlar soni
                      </label>
                      <select
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-colors"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "kishi" : "kishilar"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="text-left">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="wishes"
                      >
                        Tilaklaringiz
                      </label>
                      <textarea
                        id="wishes"
                        value={wishes}
                        onChange={(e) => setWishes(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-colors"
                        rows={3}
                        placeholder="Qo'shimcha ma'lumot yoki tilaklaringiz bo'lsa yozing"
                      ></textarea>
                    </div>
                  </div>
                )}

                {attending === true && (
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
                    >
                      Yuborish
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}

          {submitted && (
            <div
              className={`max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg transition-all duration-500 ${
                submitted ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Rahmat, {name || "qadrli mehmon"}!
              </h3>
              <p className="text-gray-600 mb-4">
                {attending
                  ? `Sizning tashrif buyurishingizni kutib qolamiz. ${guests} kishi uchun joy tayyorlaymiz.`
                  : "Javobingiz uchun rahmat."}
              </p>
            </div>
          )}
        </div>

        <div className="p-8 bg-rose-50 text-center border-t border-rose-100">
          <h2 className="text-xl font-serif font-bold mb-4 text-rose-700">
            Qo'shimcha savollar uchun
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-rose-500 mr-2" />
              <span className="text-gray-700">+998 95 009 99 45</span>
            </div>

            <div className="flex items-center">
              <Mail className="h-5 w-5 text-rose-500 mr-2" />
              <span className="text-gray-700">uchkunrakhimov@gmail.com</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-rose-100 text-center">
            <p className="text-gray-500 text-sm">
              Sizni to'yimizda ko'rishdan xursand bo'lamiz!
            </p>
            <div className="mt-2 flex justify-center">
              <Heart className="h-5 w-5 text-rose-400" fill="#fb7185" />
            </div>
          </div>
        </div>
      </div>

      {toast.show && (
        <div
          className={`fixed bottom-6 right-6 max-w-md transition-all duration-500 transform ${
            toast.show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className={`flex items-center p-4 rounded-lg shadow-lg ${
              toast.type === "success"
                ? "bg-green-500 text-white"
                : toast.type === "warning"
                ? "bg-amber-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            <div className="flex-shrink-0 mr-3">
              {toast.type === "success" ? (
                <Check className="h-5 w-5 text-white" />
              ) : toast.type === "warning" ? (
                <div className="h-5 w-5 text-white flex items-center justify-center">
                  !
                </div>
              ) : (
                <div className="h-5 w-5 text-white flex items-center justify-center">
                  i
                </div>
              )}
            </div>
            <p>{toast.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
