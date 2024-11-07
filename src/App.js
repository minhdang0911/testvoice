import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Voice from './voice';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/voice" replace />} />
                <Route path="/voice" element={<Voice />} />
            </Routes>
        </Router>
    );
}

export default App;
