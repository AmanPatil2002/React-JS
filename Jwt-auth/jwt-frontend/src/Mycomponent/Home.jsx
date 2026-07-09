
import { Navigate } from "react-router-dom";
function Home() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Movies</h1>

          <ul className="flex gap-6">
            <a href="http://localhost:5173/home"><li className="hover:text-gray-200 cursor-pointer">Home</li></a>
            <li className="hover:text-gray-200 cursor-pointer">About</li>
            <li className="hover:text-gray-200 cursor-pointer">Services</li>
            <li className="hover:text-gray-200 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2026 MyApp. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;