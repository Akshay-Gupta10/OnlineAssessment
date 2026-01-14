import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import UserDashboard from "./pages/UserDashboard";
import ProfilePage from "./pages/ProfilePage";
import StartTest from "./pages/StartTest";

function App() {

  return (
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<UserDashboard/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/start-test/:id" element={<StartTest />} />
      </Routes>
  )
}

export default App
