// ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    // 👇 Save current location (optional, for redirecting back later)
    alert("Please login to access this page.");
    return <Navigate to="/account" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
