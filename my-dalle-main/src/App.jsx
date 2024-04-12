import { options } from "request";

function App() {
  const RandomizeOptions = [
    'an image of a flying car with butterfly wings.',
    'an image of a pizza with toppings made of different musical instruments.',
    'an image of a cat wearing a top hat and holding a wand.',
    'an image of a giraffe playing basketball with a flamingo.'
    
  ]

    const getImages = async() => {
      try { 

        const options = {
          method: "POST",
          body: JSON.stringify({
            message: "Image"
          }),
          headers: {
            "Content-type": "application/json"
          }
        }
        const response = await fetch('http://localhost:8000/images', options)

      } catch (error) {
        console.error(error)
      }
    }
  return (
    <div className="app">

      <section className="search-section">

          <p>Start with a detailed description<span className="randomize">Randomize?</span></p>
          <div className="input-container">
            <input placeholder="An astronaut in the ocean?..."/>
            <button onClick={getImages}>Generate</button>
          </div>


      </section>
      <section className="image-section"></section>
      
       a
    </div>
  );
}

export default App;
