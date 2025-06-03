import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import StartMeasurement from './pages/StartMeasurement';
import PairingGuide from './pages/PairingGuide';
import PairingStatus from './pages/PairingStatus';
import PairingError from './pages/PairingError';
import LegInstruction from './pages/LegInstruction';
import LegMeasuring from './pages/LegMeasuring';
import LegDone from './pages/LegDone';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartMeasurement />} />
        <Route path="/pairing-guide" element={<PairingGuide />} />
        <Route path="/pairing-status" element={<PairingStatus />} />
        <Route path="/pairing-error" element={<PairingError />} />
        <Route path="/leg-instruction" element={<LegInstruction />} />
        <Route path="/leg-measuring" element={<LegMeasuring />} />
        <Route path="/leg-done" element={<LegDone />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
