import {
  CalendarDays,
  Phone,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

function Sidebar() {

  return (
    <aside className="sidebar">

      <NavLink
        to="/meetings"
        className={({ isActive }) =>
          `side-item ${isActive ? "active" : ""}`
        }
      >

        <div className="side-icon">
          <CalendarDays size={22} />
        </div>

        <span>
          Kavi
        </span>

      </NavLink>


      <NavLink
        to="/calls"
        className={({ isActive }) =>
          `side-item ${isActive ? "active" : ""}`
        }
      >

        <div className="side-icon">
          <Phone size={22} />
        </div>

        <span>
          Kid
        </span>

      </NavLink>

    </aside>
  );
}

export default Sidebar;