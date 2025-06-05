import { useNavigate } from 'react-router-dom';
import './Common.css';

export default function PairingGuide() {
  const navigate = useNavigate();

  const startPairing = async () => {
    try {
      await fetch('https://ad1961c3b2a1.ngrok.app/set_start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: '001', status: '1' }),
      });
      navigate('/pairing-status');
    } catch (err) {
      navigate('/pairing-error');
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src="https://i.postimg.cc/T11S3P5H/1234.png" alt="裝置圖片" />
      </div>
      <div className="instruction">按下電源進入配對</div>
      <button className="button" onClick={startPairing}>NEXT→</button>
    </div>
  );
}
