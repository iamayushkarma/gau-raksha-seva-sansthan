import { useNavigate } from 'react-router-dom';

export const useDonateNavigate = () => {
  const navigate = useNavigate();
  return () => navigate('/donation-form');
};
