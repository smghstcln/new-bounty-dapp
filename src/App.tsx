import React from 'react';
import './styles/tailwind.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import IssueBounty from './pages/IssueBounty';
import { FundBounty } from './pages/FundBounty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/IssueBounty" element={<IssueBounty />} />
          <Route path="/pages/FundBounty" element={<FundBounty />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
