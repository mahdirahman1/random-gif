import "./App.css";
import RandomGif from "./components/RandomGif";
function App() {
  return (
    <div>
      <h1>Random GIF Generator</h1>
      <div className="buttons">
        <button>RANDOM</button>
        <button>SEARCH</button>
      </div>
      <RandomGif />
    </div>
  );
}

export default App;
