import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import { empData } from './assets/data';
import { useState } from 'react';
import ViewEmployee from './components/ViewEmployee';

function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  const [employeeData, setEmployeeData] = useState(empData);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AdminDashboard
                  employeeData={employeeData}
                  setEmployeeData={setEmployeeData}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee/:id"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ViewEmployee
                  employeeData={employeeData}
                  setEmployeeData={setEmployeeData}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
