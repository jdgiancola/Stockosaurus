import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signup-Page';
import DonatePage from './pages/Donate';
import Header from './components/Header';
import Footer from './components/Footer';
import './Styles/About.css';
import './Styles/Donate.css';
import './Styles/Home.css';
import './Styles/LoginPage.css';
import './Styles/Signup-Page.css';
import './Styles/Main.css';


function App() {
  console.log('Rendering App component');

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='routebody'>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/donate" element={<DonatePage />} />
            {/* Add other routes here as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
