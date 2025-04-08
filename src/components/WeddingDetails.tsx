import { Calendar, Clock, MapPin } from "lucide-react";
import { weddingConstants } from "../constants";

interface WeddingDetailsProps {
  isLoaded: boolean;
}

const WeddingDetails: React.FC<WeddingDetailsProps> = ({ isLoaded }) => {
  return (
    <div
      className={`bg-rose-50 p-8 transition-all duration-1000 delay-700 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-serif font-bold text-center mb-8 text-rose-700">
        {weddingConstants.messages.weddingInfo}
      </h2>

      <div className="max-w-lg mx-auto space-y-6">
        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-rose-100 rounded-full mr-4">
            <Calendar className="h-6 w-6 text-rose-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Sana</h3>
            <p className="text-gray-600">{weddingConstants.date.full}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-rose-100 rounded-full mr-4">
            <Clock className="h-6 w-6 text-rose-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Vaqt</h3>
            <p className="text-gray-600">{weddingConstants.date.time}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-rose-100 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-rose-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Manzil</h3>
            <p className="text-gray-600">
              {weddingConstants.venue.name}, {weddingConstants.venue.address}
            </p>
            <a
              href={weddingConstants.venue.mapLink}
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
  );
};

export default WeddingDetails;
