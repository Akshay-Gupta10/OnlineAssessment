import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import UserDashboard from "./pages/UserDashboard";
import ProfilePage from "./pages/ProfilePage";
import StartTest from "./pages/StartTest";
import TestResult from "./pages/TestResult";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLayout from "./admin/AdminLayout";
import CreateTest from "./admin/CreateTest";
import TestAttempts from "./admin/TestAttempts";
import Analytics from "./admin/Analytics";

function App() {

  return (
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<UserDashboard/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/start-test/:id" element={<StartTest />} />
      <Route path="/test-result" element={<TestResult />} />
      <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="create-test" element={<CreateTest />} />
          <Route path="attempts" element={<TestAttempts />} />
          <Route path="analytics" element={<Analytics />} />
      </Route>
      </Routes>
  )
}

export default App
