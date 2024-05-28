
import { Login } from "./layouts/Login";
import Header from "../src/components/header/Header";
import {SignUp} from "./layouts/SignUp";
import Dashboard from "./layouts/Dashboard";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <Router>
    <Header/>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
  </Router>


  );
}

export default App;
