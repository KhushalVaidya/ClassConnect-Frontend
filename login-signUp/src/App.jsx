// import './App.css';
// import SignUpForm from "./Components/SignUp-Form/SignUpForm.jsx";
// import LoginForm from './Components/Login-Form/LoginForm.jsx';

// function App() {
//  return (
//  <div>
//     <SignUpForm/>
//     <LoginForm/>
//  </div>  
//  );
// }
// export default App


// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from "./Components/SignUp-Form/SignUpForm.jsx";
import LoginForm from './Components/Login-Form/LoginForm.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
