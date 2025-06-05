import { useNavigate } from 'react-router-dom';
import './Common.css';

export default function PairingGuide() {
  const navigate = useNavigate();

  const checkIfReady = async () => {
    try {
      const res = await fetch('https://65a2-60-250-225-149.ngrok-free.app/get_state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: '001' }),
      });
      const data = await res.json();
      if (data.state === 1) {
        navigate('/pairing-status');
      } else {
        alert('尚未就緒，請稍後再試');
      }
    } catch (err) {
      alert('連線失敗，請稍後再試');
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src="https://i.postimg.cc/T11S3P5H/1234.png" alt="裝置圖片" />
      </div>
      <div className="instruction">按下電源進入配對</div>
      <button className="button" onClick={checkIfReady}>NEXT→</button>
    </div>
  );
}
