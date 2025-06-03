import { useNavigate } from 'react-router-dom';
import './Common.css';

export default function PairingError() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="image-section">
        <img src="https://i.postimg.cc/T11S3P5H/1234.png" alt="裝置圖片" />
      </div>
      <div className="status-text">配對異常，請確認連線並重新配對</div>
      <button className="retry-button" onClick={() => navigate('/pairing-guide')}>
        重新配對
      </button>
    </div>
  );
}
