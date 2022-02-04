import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams("");
  const [load, setLoad] = useState(true);
  const [movie, setMovie] = useState([]);
  console.log(id);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoad(false);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {load ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.medium_cover_image} />
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}
