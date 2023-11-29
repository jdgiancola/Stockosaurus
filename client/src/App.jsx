import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signup-Page';
import DonatePage from './pages/Donate';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/About.css';
import './styles/Donate.css';
import './styles/Home.css';
import './styles/LoginPage.css';
import './styles/Signup-Page.css';
import './styles/Main.css';

// Main App component
function App() {
  console.log('Rendering App component');

  return (
    // Router component to enable navigation
    <Router>
      <div className="App">
        {/* Header component for the top of the page */}
        <Header />

        {/* Main content area with routes */}
        <div className='routebody'>
          {/* Routes component for defining different paths and their associated components */}
          <Routes>
            {/* Route for the home page */}
            <Route path="/" exact component={Home} />

            {/* Route for the about page, using the element prop for JSX content */}
            <Route path="/about" element={<AboutPage />} />

            {/* Route for the login page */}
            <Route path="/login" element={<LoginPage />} />

            {/* Route for the signup page */}
            <Route path="/signup" element={<SignupPage />} />

            {/* Route for the donate page */}
            <Route path="/donate" element={<DonatePage />} />

            {/* Add other routes here as needed */}
          </Routes>
        </div>

        {/* Footer component for the bottom of the page */}
        <Footer />
      </div>
    </Router>
  );
}

// Export the App component as the default export
export default App;







// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import AboutPage from './pages/About';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/Signup-Page';
// import DonatePage from './pages/Donate';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import './Styles/About.css';
// import './Styles/Donate.css';
// import './Styles/Home.css';
// import './Styles/LoginPage.css';
// import './Styles/Signup-Page.css';
// import './Styles/Main.css';


// function App() {
//   console.log('Rendering App component');

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <div className='routebody'>
//           <Routes>
//             <Route path="/" exact component={Home} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/signup" element={<SignupPage />} />
//             <Route path="/donate" element={<DonatePage />} />
//             {/* Add other routes here as needed */}
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
