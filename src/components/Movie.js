import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../style/home.module.css";

function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div className={styles.content_box}>
      <Link to={`/movie/${id}`}>
        <img src={medium_cover_image} alt={title} />
      </Link>
      <div>
        <h2 className={styles.title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className={styles.title}>
          {summary.length > 230 ? `${summary.slice(0, 230)}...` : summary}
        </p>

        <div>
          <ul className={styles.title}>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
