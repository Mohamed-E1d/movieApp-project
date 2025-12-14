import { Link } from "react-router";
import "./movieCard.css";

export default function MovieCard({ movieDetails }) {
  const {
    id,
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    media_type,
    original_language,
  } = movieDetails;

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="movie-card">
        {/* Card Image Container */}
        <div className="movie-card-img-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="movie-card-img"
          />

          {/* Rating Badge */}
          <div className="movie-rating">
            <i className="bi bi-star-fill me-1"></i>
            <span>{vote_average.toFixed(1)}</span>
          </div>

          {/* Media Type Badge */}
          <div className="movie-type">
            <i className="bi bi-film me-1 text-capitalize"></i>
            {media_type}
          </div>

          {/* Overlay */}
          <div className="movie-card-overlay">
            <div className="overlay-content">
              <button className="btn btn-play" aria-label="Play trailer">
                <i className="bi bi-play-fill"></i>
              </button>
              <div className="overlay-actions">
                <button
                  className="btn btn-action"
                  aria-label="Add to favorites"
                >
                  <i className="bi bi-heart"></i>
                </button>
                <button
                  className="btn btn-action"
                  aria-label="Add to watchlist"
                >
                  <i className="bi bi-bookmark"></i>
                </button>
                <Link to={`/movie/${id}`} className="btn btn-action" aria-label="More info">
                  <i className="bi bi-info-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="movie-card-body">
          <h5 className="movie-title fs-5">{title}</h5>
          <div className="movie-meta">
            <span className="movie-year">
              <i className="bi bi-calendar3 me-1"></i>
              {new Date(release_date).getFullYear()}
            </span>
            <span className="movie-lang">
              <i className="bi bi-globe me-1"></i>
              {original_language.toUpperCase()}
            </span>
          </div>
          <p className="movie-overview">{overview}</p>
        </div>
      </div>
    </div>
  );
}
