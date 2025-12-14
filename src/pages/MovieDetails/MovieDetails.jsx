import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./MovieDetails.css";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);

  const { id } = useParams();

  async function getMovieDetails() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ac7e5c509c05c95a09ccc13bb434f9f4`
    );
    const data = await response.json();
    setMovieDetails(data);
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      <Navbar />
      {movieDetails !== null ? (
        <main className="movie-details-page">
          {/* Hero Section with Backdrop */}
          <section className="movie-hero">
            <div className="hero-backdrop">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                alt="Movie Backdrop"
                className="backdrop-img"
              />
              <div className="backdrop-overlay"></div>
            </div>

            <div className="container hero-content">
              <div className="row align-items-center">
                {/* Poster */}
                <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
                  <div className="movie-poster-wrapper">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                      alt="Movie Poster"
                      className="movie-poster"
                    />
                    <div className="poster-badge">
                      <i className="bi bi-star-fill me-1"></i>
                      7.7
                    </div>
                  </div>
                </div>

                {/* Movie Info */}
                <div className="col-lg-8 col-md-7">
                  <div className="movie-info">
                    {/* Title */}
                    <h1 className="movie-title">{movieDetails.title}</h1>
                    <p className="movie-tagline">
                      <i className="bi bi-quote me-2"></i>
                      {movieDetails.tagline}
                    </p>

                    {/* Meta Info */}
                    <div className="movie-meta">
                      <span className="meta-item">
                        <i className="bi bi-calendar3 me-1"></i>
                        {new Date(movieDetails.release_date).getFullYear()}
                      </span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item">
                        <i className="bi bi-clock me-1"></i>
                        {movieDetails.runtime} min
                      </span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item">
                        <i className="bi bi-globe me-1"></i>
                        {movieDetails.original_language}
                      </span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item status-released">
                        <i className="bi bi-check-circle-fill me-1"></i>
                        {movieDetails.status}
                      </span>
                    </div>

                    {/* Genres */}
                    <div className="movie-genres">
                      {movieDetails.genres.map((genre) => (
                        <span className="genre-tag">{genre.name}</span>
                      ))}
                    </div>

                    {/* Rating & Stats */}
                    <div className="movie-stats">
                      <div className="stat-item">
                        <div className="stat-circle">
                          <svg viewBox="0 0 36 36" className="circular-chart">
                            <path
                              className="circle-bg"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="circle"
                              strokeDasharray="77, 100"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <span className="stat-value">
                            {movieDetails.vote_average.toFixed(1)}
                          </span>
                        </div>
                        <span className="stat-label">User Score</span>
                      </div>
                      <div className="stat-item">
                        <div className="stat-icon">
                          <i className="bi bi-people-fill"></i>
                        </div>
                        <div className="stat-text">
                          <span className="stat-number">
                            {movieDetails.vote_count}
                          </span>
                          <span className="stat-label">Votes</span>
                        </div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-icon">
                          <i className="bi bi-graph-up-arrow"></i>
                        </div>
                        <div className="stat-text">
                          <span className="stat-number">
                            {movieDetails.popularity}
                          </span>
                          <span className="stat-label">Popularity</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="movie-actions">
                      <button className="btn btn-primary-custom">
                        <i className="bi bi-play-fill me-2"></i>
                        Watch Trailer
                      </button>
                      <button className="btn btn-outline-custom">
                        <i className="bi bi-heart me-2"></i>
                        Add to Favorites
                      </button>
                      <button
                        className="btn btn-icon-custom"
                        aria-label="Add to watchlist"
                      >
                        <i className="bi bi-bookmark"></i>
                      </button>
                      <button
                        className="btn btn-icon-custom"
                        aria-label="Share"
                      >
                        <i className="bi bi-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Details Section */}
          <section className="movie-details-section">
            <div className="container">
              <div className="row">
                {/* Left Column - Overview & Details */}
                <div className="col-lg-8">
                  {/* Overview */}
                  <div className="details-card">
                    <h3 className="card-title">
                      <i className="bi bi-file-text me-2"></i>
                      Overview
                    </h3>
                    <p className="overview-text">{movieDetails.overview}</p>
                  </div>

                  {/* Movie Details */}
                  <div className="details-card">
                    <h3 className="card-title">
                      <i className="bi bi-info-circle me-2"></i>
                      Movie Details
                    </h3>
                    <div className="details-grid">
                      <div className="detail-item">
                        <span className="detail-label">Original Title</span>
                        <span className="detail-value">
                          {movieDetails.original_title}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Release Date</span>
                        <span className="detail-value">
                          {new Date(movieDetails.release_date).toDateString()}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Runtime</span>
                        <span className="detail-value">
                          {movieDetails.runtime} minutes
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Status</span>
                        <span className="detail-value">
                          <span className="status-badge">
                            {movieDetails.status}
                          </span>
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Original Language</span>
                        <span className="detail-value">English</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Budget</span>
                        <span className="detail-value">
                          ${movieDetails.budget}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Revenue</span>
                        <span className="detail-value revenue">
                          ${movieDetails.revenue}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">IMDB ID</span>
                        <span className="detail-value">
                          <a
                            href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="imdb-link"
                          >
                            <i className="bi bi-box-arrow-up-right me-1"></i>
                            {movieDetails.imdb_id}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spoken Languages */}
                  <div className="details-card">
                    <h3 className="card-title">
                      <i className="bi bi-translate me-2"></i>
                      Spoken Languages
                    </h3>
                    <div className="languages-list">
                      <span className="language-tag">
                        <i className="bi bi-chat-dots me-1"></i>
                        English
                      </span>
                      <span className="language-tag">
                        <i className="bi bi-chat-dots me-1"></i>
                        Norwegian
                      </span>
                      <span className="language-tag">
                        <i className="bi bi-chat-dots me-1"></i>
                        Spanish
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="col-lg-4">
                  {/* Collection */}
                  <div className="details-card sidebar-card">
                    <h3 className="card-title">
                      <i className="bi bi-collection me-2"></i>
                      Part of Collection
                    </h3>
                    <div className="collection-card">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                        alt="Collection Poster"
                        className="collection-poster"
                      />
                      <div className="collection-info">
                        <h5 className="collection-name">Zootopia Collection</h5>
                        <button className="btn btn-sm btn-collection">
                          View Collection
                          <i className="bi bi-arrow-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Production Companies */}
                  <div className="details-card sidebar-card">
                    <h3 className="card-title">
                      <i className="bi bi-building me-2"></i>
                      Production
                    </h3>
                    <div className="production-list">
                      <div className="production-item">
                        <div className="production-logo">
                          <img
                            src="https://image.tmdb.org/t/p/w200/tzsMJBJZINu7GHzrpYzpReWhh66.png"
                            alt="Walt Disney Animation Studios"
                          />
                        </div>
                        <div className="production-info">
                          <span className="production-name">
                            Walt Disney Animation Studios
                          </span>
                          <span className="production-country">
                            <i className="bi bi-geo-alt me-1"></i>
                            United States
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* External Links */}
                  <div className="details-card sidebar-card">
                    <h3 className="card-title">
                      <i className="bi bi-link-45deg me-2"></i>
                      External Links
                    </h3>
                    <div className="external-links">
                      <a
                        href="https://movies.disney.com/zootopia-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                      >
                        <i className="bi bi-globe2"></i>
                        <span>Official Website</span>
                      </a>
                      <a
                        href="https://www.imdb.com/title/tt26443597"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                      >
                        <i className="bi bi-film"></i>
                        <span>IMDB</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}
