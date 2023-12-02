// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:5001/graphql',
//   cache: new InMemoryCache()
// });

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
// );


import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import AboutPage from './pages/About';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signup-Page';
import DonatePage from './pages/Donate';
import ErrorPage from './pages/ErrorPage';
import './styles/About.css';
import './styles/Donate.css';
import './styles/Home.css';
import './styles/LoginPage.css';
import './styles/Signup-Page.css';
import './styles/Main.css';


// Main App component
// function App() {
//   console.log('Rendering App component');

//   return (
//     // Router component to enable navigation
//     <Router>
//       <div className="App">
//         {/* Header component for the top of the page */}
//         <Header />

//         {/* Main content area with routes */}
//         <div className='routebody'>
//           {/* Routes component for defining different paths and their associated components */}
//           <Routes>
//             {/* Route for the home page */}
//             <Route path="/" exact component={<Home/>} />

//             {/* Route for the about page, using the element prop for JSX content */}
//             <Route path="/about" element={<AboutPage />} />

//             {/* Route for the login page */}
//             <Route path="/login" element={<LoginPage />} />

//             {/* Route for the signup page */}
//             <Route path="/signup" element={<SignupPage />} />

//             {/* Route for the donate page */}
//             <Route path="/donate" element={<DonatePage />} />

//             {/* Add other routes here as needed */}
//           </Routes>
//         </div>

//         {/* Footer component for the bottom of the page */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, 
children: [
  { index: true, 
    element: <Home /> 
  }, { 
    path: '/about', 
    element: <AboutPage /> 
  }, { 
    path: '/login', 
    element: <LoginPage /> 
  }, { 
    path: '/signup', 
    element: <SignupPage /> 
  }, { 
    path: '/donate', 
    element: <DonatePage /> 
  }
]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)