import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.jpg";


function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isResetMode, setIsResetMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetKey, setResetKey] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();

      setError("");
      setSuccess("");

      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
          username,
          password,
        });

        localStorage.setItem(
          "adminToken",
          res.data.token
        );

        setSuccess("Login successful");

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1500);

      } catch (error) {

        setError("Invalid username or password");

      }
    };

  const handleResetPassword = async (e) => {
      e.preventDefault();

      setError("");
      setSuccess("");

      if (newPassword.length < 8) {
        setError("Password must be at least 8 characters");
        return;
      }

      if (newPassword !== confirmPassword) {
        setError("New password and confirm password do not match");
        return;
      }

      try {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/admin/reset-password`, {
          username,
          newPassword,
          resetKey,
        });

        setSuccess("Password reset successful. Please login with your new password.");

        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setResetKey("");

        setTimeout(() => {
          setIsResetMode(false);
          setSuccess("");
        }, 2500);
      } catch (error) {
          setError(
            error.response?.data?.message || "Something went wrong. Please try again."
          );
        }
    };

  return (
    <section className="admin-login-section">
      <div className="admin-login-card">
        <div className="admin-login-brand">

          <img
            src={logo}
            alt="K FITNESS"
            className="admin-login-logo"
          />


          <div className="admin-login-text">

            <h1>
              <span>K</span>
              FITNESS
            </h1>

            <h4>ADMIN PORTAL</h4>

          </div>

        </div>

        {error && <div className="admin-error">{error}</div>}
        {success && <div className="admin-success">{success}</div>}

        {!isResetMode ? (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button type="button" className="forgot-link" onClick={() => setIsResetMode(true)}>
              Forgot Password?
            </button>

            <button type="submit" className="admin-login-btn">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Reset Key"
              value={resetKey}
              onChange={(e) => setResetKey(e.target.value)}
              required
            />

            <button type="submit" className="admin-login-btn">
              Reset Password
            </button>

            <button type="button" className="back-login-btn" onClick={() => setIsResetMode(false)}>
              Back to Login
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default AdminLogin;