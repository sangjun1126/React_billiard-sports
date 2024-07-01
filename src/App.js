import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import TodoList from './TodoList/TodoList';
import NavigationBar from './NavigationBar';
import HanQ from './HanQ';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar /> {/* Use the styled NavigationBar */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/HanQ" element={<HanQ />} />
          <Route path='/TodoList' element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;