import { useState, useEffect } from "react";
import { CountdownValues } from "../types";
import { weddingConstants } from "../constants";

interface CountdownProps {
  isLoaded: boolean;
}

const Countdown: React.FC<CountdownProps> = ({ isLoaded }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = weddingConstants.date.dateObject;

    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownAnimation = (
    value: number,
    unit: keyof typeof weddingConstants.messages.timeUnits
  ) => {
    return (
      <div className="flex flex-col items-center min-w-[60px]">
        <div
          className={`flex flex-col items-center justify-center h-24 w-24 bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg shadow-md transform transition-all duration-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="text-3xl font-bold text-rose-600">{value}</div>
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium text-rose-700">
          {weddingConstants.messages.timeUnits[unit]}
        </p>
      </div>
    );
  };

  return (
    <div
      className={`transition-all duration-1000 delay-300 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <p className="text-xl text-rose-700 mb-4 font-medium text-center">
        {weddingConstants.messages.countdown}
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:space-x-4">
        {countdownAnimation(timeLeft.days, "days")}
        {countdownAnimation(timeLeft.hours, "hours")}
        {countdownAnimation(timeLeft.minutes, "minutes")}
        {countdownAnimation(timeLeft.seconds, "seconds")}
      </div>
    </div>
  );
};

export default Countdown;
