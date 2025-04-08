import { Heart } from "lucide-react";
import { weddingConstants } from "../constants";

interface HeaderProps {
  isLoaded: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoaded }) => {
  return (
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
          {weddingConstants.couple.groom.name.split(" ")[0]} &{" "}
          {weddingConstants.couple.bride.name.split(" ")[0]}
        </h1>

        <p className="text-xl text-rose-700 mb-4 font-serif italic">
          {weddingConstants.messages.invitation}
        </p>

        <div className="flex justify-center mb-8">
          <div className="h-0.5 w-32 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
