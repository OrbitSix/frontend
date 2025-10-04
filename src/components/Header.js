import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/Bare Logo SVG.png"
            alt="OrbitSix"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/how-it-works")}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            How it Works
          </button>
          <button
            onClick={() => navigate("/team")}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Team
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
