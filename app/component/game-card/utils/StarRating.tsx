import React from 'react';

interface StarRatingProps {
  rating: number;
  fillColor?: string;
  borderColor?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating,fillColor,borderColor }) => {
  const fullStars = Math.floor(rating);
  const partialStarPercentage = (rating % 1) * 100;

  const renderFullStars = () => {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={{ color: fillColor, borderColor }}>&#9733;</span>); 
    }
    return stars;
  };

  const renderPartialStar = () => {
    if (partialStarPercentage === 0) {
      return null;
    }
    const style: React.CSSProperties = {
      width: `${partialStarPercentage}%`,
      overflow: 'hidden',
    };
    return <span key="partial" style={{ ...style, color: fillColor, borderColor }}>&#9733;</span>; 
  };

  const renderEmptyStars = () => {
    const emptyStars = 5 - fullStars - (partialStarPercentage > 0 ? 1 : 0);
    const stars: JSX.Element[] = [];
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={i + fullStars + 1} style={{ color: borderColor }}>&#9734;</span>); 
    }
    return stars;
  };

  return (
    <div className="star-rating">
      {renderFullStars()}
      {renderPartialStar()}
      {renderEmptyStars()}
    </div>
  );
};

export default StarRating;
