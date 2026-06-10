import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AIInsights";
import Reports from "./pages/Reports";
import Settings from "./pages/Setting";
import CloudConnections from "./pages/CloudConnections";

import "./App.css";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* Alerts */}
        <Route
          path="/alerts"
          element={isLoggedIn ? <Alerts /> : <Navigate to="/login" />}
        />

        {/* Analytics */}
        <Route
          path="/analytics"
          element={isLoggedIn ? <Analytics /> : <Navigate to="/login" />}
        />

        {/* AI Insights */}
        <Route
          path="/insights"
          element={isLoggedIn ? <AIInsights /> : <Navigate to="/login" />}
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={isLoggedIn ? <Reports /> : <Navigate to="/login" />}
        />

        {/* Cloud Connections */}
        <Route
          path="/cloud"
          element={isLoggedIn ? <CloudConnections /> : <Navigate to="/login" />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={isLoggedIn ? <Settings /> : <Navigate to="/login" />}
        />

        {/* Unknown Routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
