import { useNavigate } from 'react-router-dom';
import './Common.css';

export default function LegInstruction() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="image-section">
        <img src="https://i.postimg.cc/JzBZNWWD/02.png" alt="插圖" />
      </div>
      <div className="instruction-text">採座姿並將一隻腳置於儀器中</div>
      <button className="measure-button" onClick={() => navigate('/leg-measuring')}>
        測量 →
      </button>
    </div>
  );
}
