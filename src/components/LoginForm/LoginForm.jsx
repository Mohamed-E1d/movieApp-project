import { useState } from "react";
import "./LoginForm.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };

    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );
    const data = await response.json();
      
      if(data.message === "success"){
       toast.success(" Login successful!");
        setTimeout(() => {
        navigate("/");
      }, 2000);
      }
  }

  return (
    <section className="login-wrapper">
      <div className="login-container">
        <div className="login-content">
          {/* Left Side - Branding */}
          <div className="login-branding">
            <div className="brand-logo">
              <i className="bi bi-play-circle-fill"></i>
            </div>
            <h1 className="brand-title">MovieApp</h1>
            <p className="brand-subtitle">Your Entertainment Hub</p>
            <div className="brand-features">
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Instant Access to Movies</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Watch Anywhere, Anytime</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Personalized Recommendations</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Ad-Free Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="login-form-wrapper">
            <div className="form-header">
              <h2>Welcome Back</h2>
              <p>Sign in to your account</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <i className="bi bi-envelope icon-prefix"></i>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <i className="bi bi-lock icon-prefix"></i>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    className="checkbox-input"
                  />
                  <label htmlFor="remember" className="checkbox-label">
                    Remember me
                  </label>
                </div>
                <a href="/" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-login">
                <span>Sign In</span>
                <i className="bi bi-arrow-right-short"></i>
              </button>

              {/* Footer */}
              <div className="form-footer">
                <p>
                  Don't have an account?{" "}
                  <a href="/signup" className="signup-link">
                    Create Account
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
