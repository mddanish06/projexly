import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import Subscription from "./pages/Subscription/Subscription";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";
import { fetchProjects } from "./Redux/Project/Action";
import UpgradeSuccess from "./pages/Subscription/UpgradeSuccess";
import AcceptInvitation from "./pages/Project/AcceptInvitation";
import ProjectList from "./pages/ProjectList/ProjectList";
import About from "./pages/ProjectDetails/About";
import UpdateProjectForm from "./pages/Project/UpdateProjectForm";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchProjects({}));
  }, [auth.jwt]);

  console.log(auth);

  return (
    <ThemeProvider theme={darkTheme}>
      {auth.user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/project/:id/update" element={<UpdateProjectForm />} />
            <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails />} />
            <Route path="/upgrade_plan" element={<Subscription />} />
            <Route path="/upgrade_plan/success" element={<UpgradeSuccess />} />
            <Route path="/accept_invitation" element={<AcceptInvitation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      )}
    </ThemeProvider>
  );
}

export default App;
