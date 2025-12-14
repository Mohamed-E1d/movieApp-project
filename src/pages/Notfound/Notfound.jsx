
import "./Notfound.css";

export default function Notfound() {
  return (
    <>
      
      <div className="notfound-container">
        <div className="notfound-content">
          <div className="notfound-icon">
            <i className="bi bi-exclamation-triangle-fill"></i>
          </div>
          <h1 className="notfound-title">404 - Page Not Found</h1>
          <p className="notfound-message">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
          <a href="/" className="notfound-link">
            <i className="bi bi-house-door me-2"></i>
            Go Back Home
          </a>
        </div>
      </div>
      
    </>
  );
}
