import React, { useState } from "react";
import MyGif from "../../components/gif/index";
import MySearchForm from "../../components/search-form/Index";

const GIFS = [
  {
    id: 1,
    url: "https://media.giphy.com/media/SVYrs1hU0SiAf1nw1n/giphy.gif",
  },
  {
    id: 2,
    url: "https://media.giphy.com/media/tqj4m9BRURayxQAIW9/giphy.gif",
  },
];

function Home() {
  const [gifs, setGifs] = useState(GIFS);

  return (
    <>
      <MySearchForm />
      <div className="container-gifs">
        <MyGif gifs={gifs} />
      </div>
    </>
  );
}

export default Home;
