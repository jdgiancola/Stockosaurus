import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signup-Page';
import Header from './components/Header';
import Footer from './components/Footer';
import './Styles';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          {/* Add other routes here as needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
