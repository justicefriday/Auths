import {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from "../store/useUserStore";


const ProtectedRoute = ({ children }) => {
  const user = useUserStore((s) => s.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return children;
};

export default ProtectedRoute;


