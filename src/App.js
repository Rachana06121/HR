import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Myleaves from './pages/Myleaves';
import Timesheet from './pages/Timesheet';
import Myrequest from './pages/Myrequest';
import Department from './pages/Department';
import Friends from './pages/Friends';
import Myprofile from './pages/Myprofile';
import Phonebook from './pages/Phonebook';
import Tours from './pages/Tours';
import Home from './components/Home';



function App(props) {
  return (
    <>
    <div>
      <Router>
        <Home>
        <Routes>
          <Route path="/"element={<Dashboard/>} />  'Dashboard'
          <Route path="/pages/Myleaves"element={<Myleaves/>} />  'Myleaves'
          <Route path="/pages/Timesheet"element={<Timesheet/>} />  'Timesheet'
          <Route path="/pages/Myrequest"element={<Myrequest/>} />  'Myrequest'
          <Route path="/pages/Department"element={<Department/>} />  'Department'
          <Route path="/pages/Friends"element={<Friends/>} />  'Friends'
          <Route path="/pages/Myprofile"element={<Myprofile/>} />  'Myprofile'
          <Route path="/pages/Phonebook"element={<Phonebook/>} />  'Phonebook'
          <Route path="/pages/Tours"element={<Tours/>} />  'Tours'
        </Routes>
        </Home>
      </Router>
    </div>
    </>
  );
}

export default App;