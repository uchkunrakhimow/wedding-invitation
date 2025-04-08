import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { weddingConstants } from "../constants";
import { RSVPFormData, Toast } from "../types";

interface RSVPProps {
  isLoaded: boolean;
  setToast: React.Dispatch<React.SetStateAction<Toast>>;
}

const RSVP: React.FC<RSVPProps> = ({ isLoaded, setToast }) => {
  const [showRSVP, setShowRSVP] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<RSVPFormData>({
    name: "",
    phone: "",
    attending: null,
    guests: 1,
    wishes: "",
  });

  // Check localStorage on component mount
  useEffect(() => {
    const savedRSVP = localStorage.getItem("weddingRSVP");
    if (savedRSVP) {
      const parsedData = JSON.parse(savedRSVP);
      setFormData(parsedData);
      setSubmitted(true);
    }
  }, []);

  const handleShowRSVP = () => {
    setShowRSVP(true);
    setSubmitted(false);
    setFormData({
      ...formData,
      attending: false,
    });
  };

  const handleAttendanceClick = (isAttending: boolean) => {
    setFormData({
      ...formData,
      attending: isAttending,
    });

    if (!isAttending) {
      setTimeout(() => {
        // Save RSVP data to localStorage
        localStorage.setItem(
          "weddingRSVP",
          JSON.stringify({ ...formData, attending: false })
        );

        setSubmitted(true);
        setShowRSVP(false);
        setToast({
          show: true,
          message: weddingConstants.messages.toasts.thankYouNotAttending,
          type: "info",
        });
      }, 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.attending === null) {
      setToast({
        show: true,
        message: weddingConstants.messages.toasts.chooseOption,
        type: "warning",
      });
      return;
    }

    // Save RSVP data to localStorage
    localStorage.setItem("weddingRSVP", JSON.stringify(formData));

    setSubmitted(true);
    setToast({
      show: true,
      message: formData.attending
        ? weddingConstants.messages.toasts.thankYouAttending
        : weddingConstants.messages.toasts.thankYouNotAttending,
      type: formData.attending ? "success" : "info",
    });

    setTimeout(() => {
      setShowRSVP(false);
    }, 500);
  };

  return (
    <div
      className={`p-8 bg-gradient-to-b from-white to-rose-50 text-center transition-all duration-1000 delay-900 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-rose-700">
        {weddingConstants.messages.rsvpQuestion}
      </h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Iltimos, javobingizni {weddingConstants.date.rsvpDeadline}gacha yuboring
      </p>

      {!showRSVP && !submitted ? (
        <button
          onClick={handleShowRSVP}
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5"
        >
          {weddingConstants.messages.rsvpButton}
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
                {weddingConstants.messages.formLabels.name}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                {weddingConstants.messages.formLabels.phone}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-colors"
                placeholder="+9981234567"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                {weddingConstants.messages.formLabels.attending}
              </label>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => handleAttendanceClick(true)}
                  className={`flex-1 py-3 rounded-lg transition-all duration-200 flex items-center justify-center ${
                    formData.attending === true
                      ? "bg-rose-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Check
                    className={`w-4 h-4 ${
                      formData.attending === true
                        ? "text-white"
                        : "text-gray-600"
                    } mr-2`}
                  />
                  {weddingConstants.messages.attendanceOptions.yes}
                </button>

                <button
                  type="button"
                  onClick={() => handleAttendanceClick(false)}
                  className={`flex-1 py-3 rounded-lg transition-all duration-200 flex items-center justify-center ${
                    formData.attending === false
                      ? "bg-gray-700 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <X
                    className={`w-4 h-4 ${
                      formData.attending === false
                        ? "text-white"
                        : "text-gray-600"
                    } mr-2`}
                  />
                  {weddingConstants.messages.attendanceOptions.no}
                </button>
              </div>
            </div>

            {formData.attending === true && (
              <div className="space-y-5 animate-fade-in-down">
                <div className="text-left">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="guests"
                  >
                    {weddingConstants.messages.formLabels.guests}
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guests: Number(e.target.value),
                      })
                    }
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
                    {weddingConstants.messages.formLabels.wishes}
                  </label>
                  <textarea
                    id="wishes"
                    value={formData.wishes}
                    onChange={(e) =>
                      setFormData({ ...formData, wishes: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-colors"
                    rows={3}
                    placeholder="Qo'shimcha ma'lumot yoki tilaklaringiz bo'lsa yozing"
                  ></textarea>
                </div>
              </div>
            )}

            {formData.attending === true && (
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
                >
                  {weddingConstants.messages.formLabels.submit}
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
            {weddingConstants.messages.submittedThankYou.replace(
              "qadrli mehmon",
              formData.name || "qadrli mehmon"
            )}
          </h3>
          <p className="text-gray-600 mb-4">
            {formData.attending
              ? `${weddingConstants.messages.attendingMessage} ${formData.guests} kishi uchun joy tayyorlaymiz.`
              : weddingConstants.messages.notAttendingMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default RSVP;
