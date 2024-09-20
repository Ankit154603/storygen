import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [image, setImage] = useState(null);
  const [genre, setGenre] = useState("Fantasy");
  const [style, setStyle] = useState("Descriptive");
  const [length, setLength] = useState(30);
  const [creativity, setCreativity] = useState(0.3);
  const [story, setStory] = useState("");
  const [translatedStory, setTranslatedStory] = useState("");
  const [language, setLanguage] = useState("en"); // Default language is English
  const [loading, setLoading] = useState(false);
  const [translating, setTranslating] = useState(false); // Loading state for translation

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleClear = () => {
    setImage(null);
    setGenre("Fantasy");
    setStyle("Descriptive");
    setLength(30);
    setCreativity(0.3);
    setStory("");
    setTranslatedStory("");
  };

  const handleGenerateStory = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("genre", genre);
    formData.append("style", style);
    formData.append("length", length);
    formData.append("creativity", creativity);

    try {
      const response = await fetch(
        "https://fb9a-34-168-203-42.ngrok-free.app/api/generate-story",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setStory(data.story);
      setTranslatedStory(""); // Clear the translated story when a new one is generated
    } catch (error) {
      console.error("Error fetching data:", error);
      setStory("Failed to generate story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTranslateStory = async () => {
    if (!story) return;

    setTranslating(true);

    try {
      // Example using Google Translate API or similar; replace with your API details
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=AIzaSyA6jHkYjXL8H7zAxC7IThGYPvJi10g2i5k`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: story,
            target: language, // Use the selected language code
            format: "text",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to translate story");
      }

      const data = await response.json();
      setTranslatedStory(data.data.translations[0].translatedText); // Extract translated text
    } catch (error) {
      console.error("Error translating story:", error);
      setTranslatedStory("Translation failed. Please try again.");
    } finally {
      setTranslating(false);
    }
  };

  return (
    <div className="container">
      <h1>AI Story Generator from Image</h1>
      {/* Image Upload Menu */}
      <div className="form-group">
        <label htmlFor="imageUpload">Upload an Image:</label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      {/* Story Genre Dropdown */}
      <div className="form-group">
        <label htmlFor="genre">Select Story Genre:</label>
        <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="Fantasy">Fantasy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Adventure">Adventure</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
      {/* Style Dropdown */}
      <div className="form-group">
        <label htmlFor="style">Select Story Style:</label>
        <select id="style" value={style} onChange={(e) => setStyle(e.target.value)}>
          <option value="Descriptive">Descriptive</option>
          <option value="Narrative">Narrative</option>
          <option value="Dialog-heavy">Dialog-heavy</option>
          <option value="Poetic">Poetic</option>
        </select>
      </div>
      {/* Story Length Slider */}
      <div className="form-group">
        <label htmlFor="length">Story Length: {length} words</label>
        <input
          type="range"
          id="length"
          min="30"
          max="200"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* Creativity Index Slider */}
      <div className="form-group">
        <label htmlFor="creativity">Creativity Index: {creativity}</label>
        <input
          type="range"
          id="creativity"
          min="0.3"
          max="1"
          step="0.1"
          value={creativity}
          onChange={(e) => setCreativity(parseFloat(e.target.value))}
        />
      </div>
      {/* Generate Story and Clear Buttons */}
      <div className="form-group">
        <button
          className="btn generate-btn"
          onClick={handleGenerateStory}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Story"}
        </button>
        <button className="btn clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
      {/* Story Display */}
      <div className="form-group">
        <label htmlFor="storyBox">Generated Story:</label>
        <textarea
          id="storyBox"
          value={story}
          rows="10"
          placeholder="Your generated story will appear here..."
          readOnly
        />
      </div>
      {/* Language Selection Dropdown */}
      <div className="form-group">
        <label htmlFor="language">Translate Story to:</label>
        <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="ne">Nepali</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
      {/* Translate Button */}
      <div className="form-group">
        <button
          className="btn translate-btn"
          onClick={handleTranslateStory}
          disabled={translating || !story}
        >
          {translating ? "Translating..." : "Translate Story"}
        </button>
      </div>
      {/* Translated Story Display */}
      <div className="form-group">
        <label htmlFor="translatedStoryBox">Translated Story:</label>
        <textarea
          id="translatedStoryBox"
          value={translatedStory}
          rows="10"
          placeholder="Your translated story will appear here..."
          readOnly
        />
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

export default AppWrapper;





//without Translator

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import './App.css';

// const App = () => {
//   const [image, setImage] = useState(null);
//   const [genre, setGenre] = useState("Fantasy");
//   const [style, setStyle] = useState("Descriptive");
//   const [length, setLength] = useState(30);
//   const [creativity, setCreativity] = useState(0.3);
//   const [story, setStory] = useState(""); // New state for the generated story
//   const [loading, setLoading] = useState(false); // Optional: loading state

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleClear = () => {
//     setImage(null);
//     setGenre("Fantasy");
//     setStyle("Descriptive");
//     setLength(30);
//     setCreativity(0.3);
//     setStory(""); // Clear the story as well
//   };

//   const handleGenerateStory = async () => {
//     setLoading(true); // Set loading state to true while fetching
    
//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("genre", genre);
//     formData.append("style", style);
//     formData.append("length", length);
//     formData.append("creativity", creativity);
  
//     try {
//       const response = await fetch("https://fd5e-34-106-173-42.ngrok-free.app/api/generate-story", {
//         method: "POST",
//         body: formData,
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       setStory(data.story); // Assuming the response JSON has a 'story' field
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setStory("Failed to generate story. Please try again.");
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <div className="container">
//       <h1>AI Story Generator from Image</h1>
//       {/* Image Upload Menu */}
//       <div className="form-group">
//         <label htmlFor="imageUpload">Upload an Image:</label>
//         <input
//           type="file"
//           id="imageUpload"
//           accept="image/*"
//           onChange={handleImageUpload}
//         />
//       </div>
//       {/* Story Genre Dropdown */}
//       <div className="form-group">
//         <label htmlFor="genre">Select Story Genre:</label>
//         <select
//           id="genre"
//           value={genre}
//           onChange={(e) => setGenre(e.target.value)}
//         >
//           <option value="Fantasy">Fantasy</option>
//           <option value="Sci-Fi">Sci-Fi</option>
//           <option value="Adventure">Adventure</option>
//           <option value="Horror">Horror</option>
//           <option value="Romance">Romance</option>
//         </select>
//       </div>
//       {/* Style Dropdown */}
//       <div className="form-group">
//         <label htmlFor="style">Select Story Style:</label>
//         <select
//           id="style"
//           value={style}
//           onChange={(e) => setStyle(e.target.value)}
//         >
//           <option value="Descriptive">Descriptive</option>
//           <option value="Narrative">Narrative</option>
//           <option value="Dialog-heavy">Dialog-heavy</option>
//           <option value="Poetic">Poetic</option>
//         </select>
//       </div>
//       {/* Story Length Slider */}
//       <div className="form-group">
//         <label htmlFor="length">Story Length: {length} words</label>
//         <input
//           type="range"
//           id="length"
//           min="30"
//           max="200"
//           value={length}
//           onChange={(e) => setLength(e.target.value)}
//         />
//       </div>
//       {/* Creativity Index Slider */}
//       <div className="form-group">
//         <label htmlFor="creativity">Creativity Index: {creativity}</label>
//         <input
//           type="range"
//           id="creativity"
//           min="0.3"
//           max="1"
//           step="0.1"
//           value={creativity}
//           onChange={(e) => setCreativity(parseFloat(e.target.value))}
//         />
//       </div>
//       {/* Generate Story and Clear Buttons */}
//       <div className="form-group">
//         <button className="btn generate-btn" onClick={handleGenerateStory} disabled={loading}>
//           {loading ? 'Generating...' : 'Generate Story'}
//         </button>
//         <button className="btn clear-btn" onClick={handleClear}>Clear</button>
//       </div>
//       {/* Story Display */}
//       <div className="form-group">
//         <label htmlFor="storyBox">Generated Story:</label>
//         <textarea
//           id="storyBox"
//           value={story}
//           rows="10"
//           placeholder="Your generated story will appear here..."
//           readOnly
//         />
//       </div>
//     </div>
//   );
// };

// const AppWrapper = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//     </Routes>
//   </Router>
// );

// export default AppWrapper;