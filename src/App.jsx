import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Meetings from "./pages/Meetings";
import Calls from "./pages/Calls";
import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
import Help from "./pages/Help";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/meetings"
            element={<Meetings />}
          />

          <Route
            path="/calls"
            element={<Calls />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

          {/* <Route
            path="*"
            element={<NotFound />}
          />   */}

          <Route
            path="/help"
            element={<Help />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;