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
import {  Routes, Route } from 'react-router-dom';
import SignUpForm from "./Components/SignUp-Form/SignUpForm.jsx";
import LoginForm from './Components/Login-Form/LoginForm.jsx';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    
  );
}

export default App;
