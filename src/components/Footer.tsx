import { Phone, Mail, Heart } from "lucide-react";
import { weddingConstants } from "../constants";

const Footer: React.FC = () => {
  return (
    <div className="p-8 bg-rose-50 text-center border-t border-rose-100">
      <h2 className="text-xl  font-bold mb-4 text-rose-700">
        {weddingConstants.messages.contactTitle}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-8">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-rose-500 mr-2" />
          <a
            href={`tel:${weddingConstants.contact.phone.replace(/\s/g, "")}`}
            className="text-gray-700"
          >
            {weddingConstants.contact.phone}
          </a>
        </div>

        <div className="flex items-center">
          <Mail className="h-5 w-5 text-rose-500 mr-2" />
          <a
            href={`mailto:${weddingConstants.contact.email}`}
            className="text-gray-700"
          >
            {weddingConstants.contact.email}
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-rose-100 text-center">
        <p className="text-gray-500 text-sm">
          {weddingConstants.messages.footerMessage}
        </p>
        <div className="mt-2 flex justify-center">
          <Heart className="h-5 w-5 text-rose-400" fill="#fb7185" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
