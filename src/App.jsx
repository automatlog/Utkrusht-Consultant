// App.jsx
import { useState } from "react";
import cardFront from "./assets/card-front.png";
import cardBack from "./assets/card-back.png";

function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        flipped ? "bg-gray-700" : "bg-gray-100"
      }`}
    >
      <div
        className="w-[90vw] max-w-[1004px] aspect-[1004/591] perspective cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full rounded-lg overflow-hidden backface-hidden">
            <img
              src={cardFront}
              alt="Card Front"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full rounded-lg overflow-hidden backface-hidden rotate-y-180">
            <img
              src={cardBack}
              alt="Card Back"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
