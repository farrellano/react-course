import React from "react";
import useUser from "../../hook/useUser";
import { useLocation } from "wouter";

export default function Fav({ id }) {
  const { isLogged, favs, addFav, delFav } = useUser();
  const [, navigate] = useLocation();

  const isFaved = favs.some((favId) => favId === id);

  const [label, emoji] = isFaved ? ["Remove Gif", "❌"] : ["Add Gif", "❤️"];

  const handleClick = () => {
    if (!isLogged) return navigate("/login");
    if (isFaved) {
      delFav({ id });
    } else {
      addFav({ id });
    }
  };

  return (
    <button onClick={handleClick}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  );
}
