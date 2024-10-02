import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/home';
import About from './components/about';

function App() {
  const location = useLocation();  // Get the current route
  const [key, setKey] = useState(location.pathname);  // Set a key based on the route

  useEffect(() => {
    // Update key to re-trigger animation on route change
    setKey(location.pathname);
  }, [location]);

  return (
      <header>
        <nav className="navbar">
          <h1 key={`h1-${key}`}>My Projects</h1> {/* Add a key to the h1 */}
          <ul key={`ul-${key}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>

  );
}

function Wrapper() {
  return (
    <Router basename="/Portfolio">
      <App />
    </Router>
  );
}

export default Wrapper;
