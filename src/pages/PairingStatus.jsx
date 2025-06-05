import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Common.css';

export default function PairingStatus() {
  const navigate = useNavigate();

  useEffect(() => {
    const startPairing = async () => {
      try {
        // 發送配對啟動請求
        await fetch(' https://ad1961c3b2a1.ngrok.app/set_start', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: '001', status: '1' }),
        });
      } catch (err) {
        navigate('/pairing-error');
        return;
      }

      // 開始輪詢 get_state
      const interval = setInterval(async () => {
        try {
          const res = await fetch('https://your-api.com/get_state', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: '001' }),
          });
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
    };

    startPairing();
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
