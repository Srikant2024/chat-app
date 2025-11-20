import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition">
            <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
            <h1 className="text-lg font-bold">Chatty</h1>
          </Link>

          {/* Right Links */}
          <div className="flex items-center gap-2">

            {/* Settings Button */}
            <Link
              to="/settings"
              className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 
                         hover:bg-gray-100 text-sm transition"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                {/* Profile Button */}
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 
                             hover:bg-gray-100 text-sm transition"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                {/* Logout Button */}
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 
                             hover:bg-gray-100 text-sm transition"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
