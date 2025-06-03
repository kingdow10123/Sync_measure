import { useEffect } from 'react';
import './Common.css';

export default function LegDone() {
  useEffect(() => {
    setTimeout(() => {
      window.close(); // 自動關閉視窗
    }, 5000);
  }, []);

  return (
    <div className="container">
      <div className="icon-section">
        <svg className="check-icon" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="#F08000" strokeWidth="5" fill="none" />
          <polyline
            points="30,53 45,68 72,40"
            fill="none"
            stroke="#F08000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="instruction-text">你已完成測量！</div>
    </div>
  );
}
