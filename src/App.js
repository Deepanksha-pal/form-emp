
import './App.css';
// import EmployeeForm from './components/EmployeeForm';
import Login from './pages/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import { empData } from './assets/data';
import { useState } from 'react';
import ViewEmployee from './components/ViewEmployee';

function App() {
  const [employeeData ,setEmployeeData] = useState(empData)
  return (
  <>
  {/* <EmployeeForm/> */}


  <Router>

    <Routes>
      <Route path='/'  element={<Login/>}/>
      <Route path='/admin' element={<AdminDashboard employeeData={employeeData} setEmployeeData={setEmployeeData}/>}/>
      <Route path="/employee/:id" element={<ViewEmployee employeeData={employeeData} setEmployeeData={setEmployeeData} />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
