import React from "react";
import { useLocation } from "react-router-dom";

const StoryDisplay = () => {
  const location = useLocation();
  const { storyData } = location.state || {};
  
  if (!storyData) {
    return <p>No story data available. Please go back and generate a story.</p>;
  }

  const { genre, style, length, creativity } = storyData;

  return (
    <div className="container">
      <h1>Your Generated Story</h1>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Style:</strong> {style}</p>
      <p><strong>Length:</strong> {length} words</p>
      <p><strong>Creativity Index:</strong> {creativity}</p>
      
      {/* Add more story content rendering as needed */}
      <textarea
        value={`This is a ${genre} story written in a ${style} style with a length of ${length} words and a creativity index of ${creativity}.`}
        rows="10"
        readOnly
      />
    </div>
  );
};

export default StoryDisplay;
