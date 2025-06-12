import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Common.css';

export default function PairingStatus() {
  const navigate = useNavigate();

  useEffect(() => {
    let retryCount = 0;
    const MAX_RETRY = 10;

    const startPairing = async () => {
      try {
        // 發送配對啟動請求
        await fetch('https://6f22-61-218-122-234.ngrok-free.appset_start', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: '001', status: '1' }),
        });
      } catch (err) {
        navigate('/pairing-error');
        return;
      }

      // 開始輪詢 get_state 狀態
      const interval = setInterval(async () => {
        try {
          const res = await fetch('https://6f22-61-218-122-234.ngrok-free.app/get_state', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: '001' }),
          });
          const data = await res.json();

          if (data && data.state === 1) {
            clearInterval(interval);
            navigate('/leg-instruction');
          } else {
            retryCount++;
            if (retryCount > MAX_RETRY) {
              clearInterval(interval);
              navigate('/pairing-error');
            }
          }
        } catch (e) {
          clearInterval(interval);
          navigate('/pairing-error');
        }
      }, 2000);
    };

    startPairing();

    // 清除副作用
    return () => clearInterval();
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
