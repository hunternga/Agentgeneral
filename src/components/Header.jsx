import {
  Video,
  Keyboard,
  CircleHelp,
  Settings,
  Grid3X3,
  UserCircle,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JoinMeeting from "./JoinMeeting";
import LoginModal from "./LoginModal";
import ExtensionModal from "./ExtensionModal";

function Header() {
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [extensionsOpen, setExtensionsOpen] = useState(false);

  return (
    <>
      <header className="top-header">

        {/* Logo */}

        <div
          className="brand"
          onClick={() => navigate("/meetings")}
        >

          <div className="brand-icon">
            <Video size={25} />
          </div>

          <span className="brand-name">
            Capaciter
          </span>

        </div>


        {/* Center */}

        <div className="header-center">

          <JoinMeeting />


          {/* <button className="new-button">

          <Video size={20} />

          <span>
            New
          </span>

        </button> */}

        </div>


        {/* Right */}

        <div className="header-actions">

          <button
            className="icon-button"
            onClick={() => navigate("/help")}
          >
            <CircleHelp size={23} />
          </button>

          <button
            className="icon-button"
            onClick={() => navigate("/settings")}
          >
            <Settings size={23} />
          </button>

          <button
            className="login-button"
            onClick={() => setLoginOpen(true)}
          >
            Login
          </button>

          <button
            className="icon-button"
            onClick={() =>
              setExtensionsOpen(!extensionsOpen)
            }
          >
            <Grid3X3 size={22} />
          </button>

          <button className="profile-button" 
          onClick={() => navigate("/")}
          >
            <UserCircle size={35} />
          </button>

        </div>

      </header>
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
      <ExtensionModal
        open={extensionsOpen}
        onClose={() => setExtensionsOpen(false)}
      />
    </>
  );
}

export default Header;