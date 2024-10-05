import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import VerifyEmail from './components/VerifyEmail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import UserList from './components/UserList';
import EditTask from './components/EditTask';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-center">TASKS APP</h2>
      <BrowserRouter>
        <Routes>
        <Route element={<Navigate to="login" />} path="/" />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path='/verify-email/:token' element={<VerifyEmail />} />
          <Route path='/create-task' element={<TaskForm />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/edit-task/:id' element={<EditTask />} />

          
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
