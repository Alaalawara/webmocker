import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import toast from 'react-hot-toast';

function ProtectedRoute() {
  const { user } = useContext(UserContext);

  if (user === undefined) {
    return null;
  }

  if (!user) {
    toast.error('Please log in to access this page.');
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;