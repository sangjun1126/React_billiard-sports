import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import member from './member';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/member">단골회원</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* 네브바를 App 컴포넌트 안에 추가 */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/member' element={<member />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
