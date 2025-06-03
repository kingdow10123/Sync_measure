import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Common.css';

export default function LegMeasuring() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/leg-done');
    }, 30000); // 30 秒測量時間

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="measuring-screen">
      <div className="spinner"></div>
      <div className="status-text">測量中</div>
    </div>
  );
}
