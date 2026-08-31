import { X } from "lucide-react";
import "./LoginModal.css";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21">
      <path
        fill="#4285F4"
        d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.92-4.18 2.92-7.39z"
      />
      <path
        fill="#34A853"
        d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.43c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.51A9.75 9.75 0 0 0 12 21.5z"
      />
      <path
        fill="#FBBC05"
        d="M6.54 13.62A5.86 5.86 0 0 1 6.23 12c0-.56.1-1.11.31-1.62V7.87H3.29A9.5 9.5 0 0 0 2.25 12c0 1.49.36 2.9 1.04 4.13l3.25-2.51z"
      />
      <path
        fill="#EA4335"
        d="M12 6.35c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.43 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.71 5.37l3.25 2.51C7.31 8.07 9.46 6.35 12 6.35z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <div className="linkedin-icon">
      in
    </div>
  );
}

function FacebookIcon() {
  return (
    <div className="facebook-icon">
      f
    </div>
  );
}

function XIcon() {
  return (
    <div className="x-icon">
      X
    </div>
  );
}

function LoginModal({ open, onClose }) {

  if (!open) {
    return null;
  }

  const handleLogin = (provider) => {
    console.log(`Login with ${provider}`);

    // OAuth integration will be added here.
  };

  return (
    <div
      className="login-overlay"
      onMouseDown={onClose}
    >

      <div
        className="login-modal"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >

        {/* Close */}

        <button
          className="login-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={22} />
        </button>


        {/* Header */}

        <div className="login-header">

          <div className="login-logo">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h2>
            Welcome back
          </h2>

          <p>
            Sign in to continue
          </p>

        </div>


        {/* Social Login */}

        <div className="social-login">

          <button
            className="social-button google"
            onClick={() => handleLogin("Google")}
          >
            <GoogleIcon />

            <span>
              Continue with Google
            </span>
          </button>


          <button
            className="social-button linkedin"
            onClick={() => handleLogin("LinkedIn")}
          >
            <LinkedInIcon />

            <span>
              Continue with LinkedIn
            </span>
          </button>


          <button
            className="social-button facebook"
            onClick={() => handleLogin("Facebook")}
          >
            <FacebookIcon />

            <span>
              Continue with Facebook
            </span>
          </button>


          <button
            className="social-button x"
            onClick={() => handleLogin("X")}
          >
            <XIcon />

            <span>
              Continue with X
            </span>
          </button>

        </div>


        {/* Divider */}

        <div className="login-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>


        {/* Email */}

        <button
          className="email-login-button"
          onClick={() => handleLogin("Email")}
        >
          Continue with email
        </button>


        <p className="login-footer">
          By continuing, you agree to our{" "}
          <span>Terms</span> and{" "}
          <span>Privacy Policy</span>.
        </p>

      </div>

    </div>
  );
}

export default LoginModal;