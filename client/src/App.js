import "./resources/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
import CheckStatus from "./pages/CheckStatus";
import Support from "./pages/Support";
import Description from "./pages/Description";
import NewJob from "./pages/admin/NewJob";
import Signup from "./pages/admin/Signup";
import Login from "./pages/admin/Login"
import ApplicationsList from "./pages/admin/ApplicationsList";
import JobList from "./pages/admin/JobList"
import EditJob from "./pages/admin/EditJob";
import Protected from "./resources/components/Protected";
import RootHome from "./root/Home";
import RootLogin from "./root/Login";
import RootSecure from "./resources/components/RootSecure";
import AdminList from "./root/AdminList";
import AdminDetails from "./root/AdminDetails";
import EditApplication from "./pages/admin/EditApplication";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/jobs" Component={Jobs}></Route>
        <Route path="/jobs/desc/:postId" Component={Description}></Route>
        <Route path="/apply" Component={Apply}></Route>
        <Route path="/check-status" Component={CheckStatus}></Route>
        <Route path="/support" Component={Support}></Route>

        {/* Admin Routes */}

        <Route path="/admin/signup" Component={Signup}></Route>
        <Route path="/admin/login" Component={Login}></Route>
        <Route path="/admin/post-a-new-job" element={<Protected Component={NewJob} />}></Route>
        <Route path="/admin/" element={<Protected Component={ApplicationsList} />}></Route>
        <Route path="/admin/job-list" element={<Protected Component={JobList} />}></Route>
        <Route path="/admin/edit-job/:postId" element={<Protected Component={EditJob} />}></Route>
        <Route path="/admin/edit-application/:postId" element={<Protected Component={EditApplication} />}></Route>

        <Route path="/root/" element={<RootSecure Component={RootHome} />}></Route>
        <Route path="/root/admin-list" element={<RootSecure Component={AdminList} />}></Route>
        <Route path="/root/admin-details/:postId" element={<RootSecure Component={AdminDetails} />}></Route>

        <Route path="/root/login" Component={RootLogin}></Route>




      </Routes>
    </BrowserRouter>
  );
}

export default App;
