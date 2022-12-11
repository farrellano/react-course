import { Link } from "wouter";

export default function MyGif({ gifs }) {
  return gifs.map((g) => {
    return (
      <>
        <Link key={g.id} href={`/Detail/${g.id}`}>
          <div className="list-item" key={g.id}>
            <img className="gif-img" src={g.url} alt={g.id} />
            <span className="gif-text">{g.id}</span>
          </div>
        </Link>
      </>
    );
  });
}
