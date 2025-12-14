import "./Footer.css";

export default function Footer() {
  return (
   <>
   
    <footer className="footer-custom ">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top py-5">
          <div className="container">
            <div className="row g-4">
              {/* Brand Section */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-brand">
                  <div className="footer-logo">
                    <i className="bi bi-play-circle"></i>
                    <h3>MovieApp</h3>
                  </div>
                  <p>
                    Your ultimate destination for movies, series, and actors.
                    Discover, stream, and enjoy premium entertainment.
                  </p>
                  <div className="footer-social">
                    <a href="#/" className="social-icon" title="Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#/" className="social-icon" title="Twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#/" className="social-icon" title="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#/" className="social-icon" title="LinkedIn">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#/" className="social-icon" title="YouTube">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6">
                <div className="footer-section">
                  <h5>Quick Links</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/movies">Movies</a>
                    </li>
                    <li>
                      <a href="/series">Series</a>
                    </li>
                    <li>
                      <a href="/actors">Actors</a>
                    </li>
                    <li>
                      <a href="/">Trending</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Categories */}
              <div className="col-lg-2 col-md-6">
                <div className="footer-section">
                  <h5>Categories</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="/">Action</a>
                    </li>
                    <li>
                      <a href="/">Comedy</a>
                    </li>
                    <li>
                      <a href="/">Drama</a>
                    </li>
                    <li>
                      <a href="/">Thriller</a>
                    </li>
                    <li>
                      <a href="/">Sci-Fi</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Support */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-section">
                  <h5>Get In Touch</h5>
                  <div className="footer-contact">
                    <div className="contact-item">
                      <i className="bi bi-envelope"></i>
                      <div>
                        <p className="label">Email</p>
                        <a href="mailto:support@movieapp.com">
                          support@movieapp.com
                        </a>
                      </div>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-telephone"></i>
                      <div>
                        <p className="label">Phone</p>
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                      </div>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-geo-alt"></i>
                      <div>
                        <p className="label">Location</p>
                        <p>123 Movie Street, Hollywood, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="footer-copyright">
                  &copy; 2025 MovieApp. All rights reserved.
                </p>
              </div>
              <div className="col-md-6">
                <ul className="footer-bottom-links">
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms of Service</a>
                  </li>
                  <li>
                    <a href="/">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
   
   </>
  );
}
