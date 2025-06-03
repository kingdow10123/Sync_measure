import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Common.css';

export default function PairingStatus() {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch('https://your-api.com/get_state?userId=001');
        const data = await res.json();
        if (data.state === 1) {
          clearInterval(interval);
          navigate('/leg-instruction');
        }
      } catch {
        clearInterval(interval);
        navigate('/pairing-error');
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="container">
      <div className="image-section">
        <img src="https://i.postimg.cc/T11S3P5H/1234.png" alt="裝置圖片" />
      </div>
      <div className="status-text">配對中</div>
    </div>
  );
}
