import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Left side */}
          <Link
            to="/"
            className="text-xl font-semibold text-blue-600 hover:text-blue-700"
          >
            Home
          </Link>

          {/* Right side */}
          <div className="space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1 container mx-auto py-6 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
