import React, { useState } from "react";

const StarRatingComponent = ({ maxStars = 5, filledStars = 0, onChange }) => {
  const [hoveredStar, setHoveredStar] = useState(0);

  const activeStars = hoveredStar || filledStars;

  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        width: "fit-content",
      }}
      onMouseLeave={() => setHoveredStar(0)}
    >
      {Array.from({ length: maxStars }).map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= activeStars ;
        return (
          <button
            key={index}
            type="button"
            onMouseEnter={() => setHoveredStar(starValue)}
            onClick={() => onChange?.(starValue)}
            aria-label={`Rate ${starValue} stars`}
            aria-pressed={starValue === filledStars}
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: "pointer",
              fontSize: "36px",
              color: isFilled ? "#facc15" : "#d1d5db",
              transition: "color 150ms ease",
            }}
          >
            ★
          </button>
        );
      })}
    </div>
  );
};

const StarRating = () => {
  const [rating, setRating] = useState(3);
  return (
    <div>
      <StarRatingComponent
        maxStars={5}
        filledStars={rating}
        onChange={setRating}
      />
    </div>
  );
};

export default StarRating;
