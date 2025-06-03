import { useNavigate } from 'react-router-dom';
import './Common.css';

export default function StartMeasurement() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="top-section">
        <img src="https://i.imgur.com/87gp1gR.png" alt="問卷插畫" />
      </div>
      <div className="content-section">
        <h1>開始測量</h1>
        <p className="subtitle">點擊按鈕開始配對與測量</p>
        <button className="primary" onClick={() => navigate('/pairing-guide')}>
          開始 →
        </button>
      </div>
    </div>
  );
}
