import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { GifWrapper, SearchWrapper, StyledInput, Error } from "./gif.styled";
import { Button } from "./button.styled";
import useGif from "../hooks/useGif";

const SearchGif = () => {
  const [search, setSearch] = useState("");
  const { gif, fetchGif, error } = useGif(search);
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchGif(search);
    }
  };

  return (
    <Fragment>
      <SearchWrapper>
        <StyledInput
          placeholder="Enter a term and hit enter"
          value={search}
          onChange={onChangeHandler}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </SearchWrapper>
      <GifWrapper>
        {error && <Error>{error}</Error>}
        {!error && <img width="500" height="300" src={gif} />}
        <div className="error">
          {!error && search && (
            <Button
              onClick={fetchGif}
            >{`Show me another ${search} gif`}</Button>
          )}
        </div>
      </GifWrapper>
    </Fragment>
  );
};

export default SearchGif;
