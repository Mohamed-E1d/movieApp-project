
import "./Loading.css";


export default function Loading() {
  return (
    <>
      
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h1 className="loading-title">Loading...</h1>
          <p className="loading-message">
            Please wait while we load your content.
          </p>
        </div>
      </div>
     
    </>
  );
}
