import React from "react";
import { Clock, Users, Music, Cake } from "lucide-react";
import { weddingConstants } from "../constants";
import { WeddingProgram } from "../types";

interface ProgramProps {
  isLoaded: boolean;
}

const Program: React.FC<ProgramProps> = ({ isLoaded }) => {
  // Function to get icon component based on icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="h-5 w-5 text-rose-600" />;
      case "Users":
        return <Users className="h-5 w-5 text-rose-600" />;
      case "Music":
        return <Music className="h-5 w-5 text-rose-600" />;
      case "Cake":
        return <Cake className="h-5 w-5 text-rose-600" />;
      default:
        return <Clock className="h-5 w-5 text-rose-600" />;
    }
  };

  const ProgramItem: React.FC<{ item: WeddingProgram }> = ({ item }) => (
    <div className="bg-rose-50 p-4 rounded-lg shadow-sm flex items-center space-x-3">
      <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
        {getIcon(item.icon)}
      </div>
      <div>
        <h3 className="font-medium text-gray-800">{item.time}</h3>
        <p className="text-sm text-gray-600">{item.event}</p>
      </div>
    </div>
  );

  return (
    <div
      className={`p-8 bg-white transition-all duration-1000 delay-800 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-2xl  font-bold text-center mb-8 text-rose-700">
        {weddingConstants.messages.weddingProgram}
      </h2>

      <div className="max-w-lg mx-auto grid md:grid-cols-2 gap-6">
        {weddingConstants.program.map((item, index) => (
          <ProgramItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Program;
