import React, { useState, useEffect, useCallback, useRef } from "react";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotate: number;
  color: string;
}

const HEART_COLORS = ["#F43F5E", "#FB7185", "#FDA4AF", "#FECDD3", "#FFE4E6"];

const HeartAnimation: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const clickCountRef = useRef(0);

  const handleClick = useCallback((e: MouseEvent) => {
    clickCountRef.current += 1;

    if (clickCountRef.current === 10) {
      toast.success("Siz 10 marta reaksiya bildirdingiz! Rahmat!", {
        position: "top-center",
        icon: <Heart />,
      });
    }

    const numHearts = Math.floor(Math.random() * 6) + 5;
    const newHearts: Heart[] = [];

    for (let i = 0; i < numHearts; i++) {
      const x = e.clientX;
      const y = e.clientY;
      newHearts.push({
        id: Date.now() + i,
        x,
        y,
        size: Math.random() * 20 + 10,
        opacity: 1,
        rotate: Math.random() * 360,
        color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      });
    }

    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) =>
        prev.filter(
          (heart) => !newHearts.some((newHeart) => newHeart.id === heart.id)
        )
      );
    }, 2000);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            transform: `scale(${heart.size / 20}) rotate(${heart.rotate}deg)`,
            opacity: heart.opacity,
            color: heart.color,
            animation: "float-up 2s ease-out forwards",
          }}
        >
          <Heart fill="#f43f5e" />
        </div>
      ))}
    </div>
  );
};

export default HeartAnimation;
