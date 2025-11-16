import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "/src/Context/AppContext";
import logo from '../assets/logo.png';

const Navbar = () => {
  const { user, token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleLogout(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      navigate("/");
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
<nav className="container mx-auto flex items-center justify-between py-1 px-4">
  <Link to="/" className="flex items-center">
    <img
      src={logo}
      alt="Logo"
      className={`h-20 transition-all duration-300 ${
        isScrolled ? "brightness-100" : "brightness-100 "
      }`}
    />
  </Link>

  {user ? (
    <div className="flex items-center gap-4">
      <span
        className={`transition-all duration-300 ${
          isScrolled ? "text-gray-700" : "text-white"
        }`}
      >
        Welcome back {user.name}
      </span>

      <form onSubmit={handleLogout}>
        <button
          type="submit"
          className={`px-3 py-1 rounded text-sm transition-all duration-300 ${
            isScrolled
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          Logout
        </button>
      </form>
    </div>
  ) : (
    <div className="space-x-4">
      <Link
        to="/login"
        className={`transition-all duration-300 ${
          isScrolled
            ? "text-gray-700 hover:text-blue-600"
            : "text-white hover:text-gray-300"
        }`}
      >
        Login
      </Link>
    </div>
  )}
</nav>

    </header>
  );
};

export default Navbar;
