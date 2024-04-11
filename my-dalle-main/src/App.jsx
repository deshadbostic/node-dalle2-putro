import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

function App() {
  const RandomizeOptions = [
    'an image of a flying car with butterfly wings.',
    'an image of a pizza with toppings made of different musical instruments.',
    'an image of a cat wearing a top hat and holding a wand.',
    'an image of a giraffe playing basketball with a flamingo.'
  ];

  const [imageUrl, setImageUrl] = useState('');
  const [textInput, setTextInput] = useState('');

 
  const getImages = async () => {
    try { 
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: textInput
        }),
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await fetch('http://localhost:8000/images', options);
      const data = await response.json(); // Parse JSON response
  
      setImageUrl(data.url); // Set imageUrl with parsed JSON response
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div className="app">
      <section className="image-section">
        {imageUrl && <img src={imageUrl} alt="Generated Image" />}
      </section>

      <section className="search-section">
        <div className="input-container">
        <input 
            placeholder="An astronaut in the ocean?..."
            value={textInput}
            onChange={handleInputChange} // Add onChange handler to update state
          />
          <button onClick={getImages}>Generate</button>
        </div>
        <p>Start with a detailed description<span className="randomize">Randomize?</span></p>
      </section>
    </div>
  );
}

export default App;
