import { Button } from "./button.styled";
import { GifWrapper } from "./gif.styled";
import useGif from "../hooks/useGif";

const RandomGif = () => {
  const { gif, fetchGif, error } = useGif();
  return (
    <GifWrapper>
      {error && <p>{error}</p>}
      <img width="500" height="300" src={gif} />
      <div>
        <Button onClick={fetchGif}>Show me another</Button>
      </div>
    </GifWrapper>
  );
};

export default RandomGif;
