import { Link, Outlet, useNavigate } from "react-router-dom";
import { Home, User, Video, Settings, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // get logged-in user

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111113] text-white flex flex-col justify-between shadow-lg">
        <div>
          {/* User info on top */}
          <div className="flex flex-col items-center p-6 border-b border-gray-700">
            <img
              src={user?.profile_picture || "https://i.pravatar.cc/150?img=3"}
              alt={user?.name || "User"}
              className="w-20 h-20 rounded-full border-2 border-indigo-600 object-cover"
            />
            <h2 className="mt-2 font-semibold text-lg">{user?.name || "Tarun Naik"}</h2>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col mt-6 space-y-3 px-4">
            <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-600">
              <Home size={18} /> Home
            </Link>
            <Link to="/profile" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-600">
              <User size={18} /> Profile
            </Link>
            <Link to="/reels" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-600">
              <Video size={18} /> Reels
            </Link>
            <Link to="/settings" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-600">
              <Settings size={18} /> Settings
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded hover:bg-red-600 text-red-400"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
