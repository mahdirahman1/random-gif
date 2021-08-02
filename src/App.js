import { Fragment, useState } from "react";
import "./App.css";
import RandomGif from "./components/RandomGif";
import SearchGif from "./components/SearchGif";
import { StyledButton } from "./components/button.styled";
import Footer from "./components/Footer";
import img from "./media/logo.png";

function App() {
  const [page, setPage] = useState("random");
  return (
    <div>
      <Footer>
        <a href="https://giphy.com/">
          <img src={img} />
        </a>
      </Footer>
      <h1>Random GIF Generator</h1>
      <div className="buttons">
        <StyledButton
          name="random"
          current={page}
          onClick={() => setPage("random")}
        >
          RANDOM
        </StyledButton>
        <StyledButton
          name="search"
          current={page}
          onClick={() => setPage("search")}
        >
          SEARCH
        </StyledButton>
      </div>
      {page === "random" && <RandomGif />}
      {page === "search" && <SearchGif />}
    </div>
  );
}

export default App;
