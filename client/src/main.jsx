import ReactDOM from 'react-dom/client'
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
  }, {
    path: '*',
    element: <ErrorPage />
  }
]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)