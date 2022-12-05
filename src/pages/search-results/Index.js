import { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";
import MyGif from "../../components/gif";

function SearchResults({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ keyword }).then((g) => setGifs(g));
    },
    [keyword]
  );

  return (
    <>
      <h2>{keyword}</h2>
      <div className="container-gifs">
        <MyGif gifs={gifs} />
      </div>
    </>
  );
}

export default SearchResults;
