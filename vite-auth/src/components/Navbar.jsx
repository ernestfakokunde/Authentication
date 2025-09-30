 import { useAuth } from "../context/authContext";

const Navbar = () => {
  const { logout, isAuthenticated } =  useAuth();

  return (
    <nav>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
};
