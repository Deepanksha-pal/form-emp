
import './App.css';
// import EmployeeForm from './components/EmployeeForm';
import Login from './pages/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
  <>
  {/* <EmployeeForm/> */}


  <Router>

    <Routes>
      <Route path='/'  element={<Login/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
