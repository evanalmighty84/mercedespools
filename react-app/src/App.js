import React from 'react';
import './styles/templatemo-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async'; // <-- ADD THIS
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
    return (
        <HelmetProvider> {/* <-- WRAP your app here */}
            <Home />
        </HelmetProvider>
    );
}

export default App;
