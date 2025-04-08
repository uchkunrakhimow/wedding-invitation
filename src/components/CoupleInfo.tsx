import { Heart } from "lucide-react";
import { weddingConstants } from "../constants";
import { CoupleInfo as CoupleInfoType } from "../types";

interface CoupleInfoProps {
  isLoaded: boolean;
}

const PersonProfile: React.FC<{ person: CoupleInfoType; isRight: boolean }> = ({
  person,
  isRight,
}) => {
  return (
    <div className="md:w-1/2 p-8 text-center">
      <div className="relative inline-block mb-4 transition-transform duration-500 hover:scale-105">
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-rose-200 to-rose-400 opacity-20 transform ${
            isRight ? "-rotate-6" : "rotate-6"
          } scale-105`}
        ></div>
        <img
          src={person.image}
          alt={person.name}
          className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
        />
        <div
          className={`absolute -bottom-2 ${
            isRight ? "-right-2" : "-left-2"
          } bg-rose-500 text-white rounded-full p-2 shadow-lg`}
        >
          <Heart size={16} fill="white" />
        </div>
      </div>
      <h2 className="text-2xl font-serif font-bold mb-1 text-gray-800">
        {person.name}
      </h2>
      <p className="text-gray-600">{person.family}</p>
    </div>
  );
};

const CoupleInfo: React.FC<CoupleInfoProps> = ({ isLoaded }) => {
  const { groom, bride } = weddingConstants.couple;

  return (
    <div
      className={`transition-all duration-1000 delay-500 transform ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <PersonProfile person={groom} isRight={true} />
        <PersonProfile person={bride} isRight={false} />
      </div>
    </div>
  );
};

export default CoupleInfo;
