import { use, useState } from "react";
import "./SignupForm.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const signupData = {
      name,
      email,
      phoneNumber: phone,
      password,
      rePassword: confirmPassword,
    };

    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      }
    );
    const data = await response.json();
   if(data.message === "success"){
   toast.success("Signup successful!");
    setTimeout(() => {
    navigate("/login");
  }, 2000);
  }
    } 
 
  return (
    <section className="signup-wrapper py-5">
      <div className="signup-container">
        <div className="signup-content">
          {/* Left Side - Branding */}
          <div className="signup-branding">
            <div className="brand-logo">
              <i className="bi bi-play-circle-fill"></i>
            </div>
            <h1 className="brand-title">MovieApp</h1>
            <p className="brand-subtitle">Discover Premium Entertainment</p>
            <div className="brand-features">
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Unlimited Movies & Series</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Exclusive Actor Profiles</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Personalized Recommendations</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>HD Quality Streaming</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="signup-form-wrapper">
            <div className="form-header">
              <h2>Create Account</h2>
              <p>Join millions of movie enthusiasts</p>
            </div>

            <form className="signup-form" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="input-wrapper">
                  <i className="bi bi-person icon-prefix"></i>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

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

              {/* Phone */}
              <div className="form-group  ">
                <label className="form-label">Phone Number</label>
                <div className="input-wrapper">
                  <i className="bi bi-telephone icon-prefix"></i>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              {/* Password & Confirm Password */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="input-wrapper">
                    <i className="bi bi-lock icon-prefix"></i>
                    <input
                      type="password"
                      className="form-input"
                      placeholder="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-wrapper">
                    <i className="bi bi-shield-lock icon-prefix"></i>
                    <input
                      type="password"
                      className="form-input"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <div className="form-checkbox">
                <input type="checkbox" id="terms" className="checkbox-input" />
                <label htmlFor="terms" className="checkbox-label">
                  I agree to the <a href="/">Terms & Conditions</a> and{" "}
                  <a href="/">Privacy Policy</a>
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-signup">
                <span>Create Account</span>
                <i className="bi bi-arrow-right-short"></i>
              </button>

              {/* Footer */}
              <div className="form-footer">
                <p>
                  Already have an account?{" "}
                  <a href="/login" className="login-link">
                    Sign In
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
