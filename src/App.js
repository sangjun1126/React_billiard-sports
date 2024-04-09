import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routes를 import합니다.
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div>
        {/* <Routes>로 감싸서 하위에 <Route> 컴포넌트들을 포함시킵니다. */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
