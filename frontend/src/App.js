// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import './App.css';
// import StoryDisplay from './components/StoryDisplay';

// const App = () => {
//   const [image, setImage] = useState(null);
//   const [genre, setGenre] = useState("Fantasy");
//   const [style, setStyle] = useState("Descriptive");
//   const [length, setLength] = useState(30);
//   const [creativity, setCreativity] = useState(0.3);
//   const navigate = useNavigate(); 


//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };


//   const handleClear = () => {
//     setImage(null);
//     setGenre("Fantasy");
//     setStyle("Descriptive");
//     setLength(30);
//     setCreativity(0.3);
//   };


//   const handleGenerateStory = () => {
//     const storyData = {
//       image,
//       genre,
//       style,
//       length,
//       creativity,
//     };


//     navigate("/story-display", { state: { storyData } });
//   };

//   return (
//     <div className="container">
//       <h1>AI Story Generator from Image</h1>


//       <div className="form-group">
//         <label htmlFor="imageUpload">Upload an Image:</label>
//         <input
//           type="file"
//           id="imageUpload"
//           accept="image/*"
//           onChange={handleImageUpload}
//         />
//       </div>


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


//       <div className="form-group">
//         <button className="btn generate-btn" onClick={handleGenerateStory}>Generate Story</button>
//         <button className="btn clear-btn" onClick={handleClear}>Clear</button>
//       </div>
//     </div>
//   );
// };

// const AppWrapper = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/story-display" element={<StoryDisplay />} />
//     </Routes>
//   </Router>
// );

// export default AppWrapper;









// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import './App.css';
// import StoryDisplay from './components/StoryDisplay';

// const App = () => {
//   const [image, setImage] = useState(null);
//   const [genre, setGenre] = useState("Fantasy");
//   const [style, setStyle] = useState("Descriptive");
//   const [length, setLength] = useState(30);
//   const [creativity, setCreativity] = useState(0.3);
//   const navigate = useNavigate(); 

//   const handleImageUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleClear = () => {
//     setImage(null);
//     setGenre("Fantasy");
//     setStyle("Descriptive");
//     setLength(30);
//     setCreativity(0.3);
//   };

//     const handleGenerateStory = async () => {
//       const formData = new FormData();
//       formData.append("image", image);
//       formData.append("genre", genre);
//       formData.append("style", style);
//       formData.append("length", length);
//       formData.append("creativity", creativity);
    
//       const response = await fetch("http://localhost:5000/api/generate-story", {
//         method: "POST",
//         body: formData,
//       });
    
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
    
//       const data = await response.json();
//       navigate("/story-display", { state: { storyData: data } });
//     };
    

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
//         <button className="btn generate-btn" onClick={handleGenerateStory}>Generate Story</button>
//         <button className="btn clear-btn" onClick={handleClear}>Clear</button>
//       </div>
//     </div>
//   );
// };

// const AppWrapper = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/story-display" element={<StoryDisplay />} />
//     </Routes>
//   </Router>
// );

// export default AppWrapper;


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';

const App = () => {
  const [image, setImage] = useState(null);
  const [genre, setGenre] = useState("Fantasy");
  const [style, setStyle] = useState("Descriptive");
  const [length, setLength] = useState(30);
  const [creativity, setCreativity] = useState(0.3);
  const [story, setStory] = useState(""); // New state for the generated story
  const [loading, setLoading] = useState(false); // Optional: loading state

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleClear = () => {
    setImage(null);
    setGenre("Fantasy");
    setStyle("Descriptive");
    setLength(30);
    setCreativity(0.3);
    setStory(""); // Clear the story as well
  };

  const handleGenerateStory = async () => {
    setLoading(true); // Set loading state to true while fetching
    
    const formData = new FormData();
    formData.append("image", image);
    formData.append("genre", genre);
    formData.append("style", style);
    formData.append("length", length);
    formData.append("creativity", creativity);
  
    try {
      const response = await fetch("http://localhost:5000/api/generate-story", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setStory(data.story); // Assuming the response JSON has a 'story' field
    } catch (error) {
      console.error("Error fetching data:", error);
      setStory("Failed to generate story. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
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
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
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
        <select
          id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
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
        <button className="btn generate-btn" onClick={handleGenerateStory} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Story'}
        </button>
        <button className="btn clear-btn" onClick={handleClear}>Clear</button>
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
