import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ReelsPage from "./pages/ReelsPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard layout with nested pages */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<div className="p-6">Welcome Home</div>} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="reels" element={<ReelsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
