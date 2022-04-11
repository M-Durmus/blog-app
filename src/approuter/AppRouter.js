import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Dashboard";
// import Details from "../components/details/Details";
import Profile from "../pages/Profile";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog.js";
import Details from "../pages/Details.js";
import UpdateBlog from "../pages/UpdateBlog";

function AppRouter() {
  const [isAuth, setIsAuth] = useState(true);

  const AuthContainer = () => (
    <div>
      {/* <PrivateRouter isAuth={isAuth} path="/details" component={Details} /> */}
      <PrivateRouter path="/about" element={About} />
      <PrivateRouter path="/profile" element={Profile} />
      <PrivateRouter path="/new-blog" element={NewBlog} />
      <PrivateRouter path="/update-blog/:id" element={UpdateBlog} />
      <PrivateRouter path="/detail/:id" element={Details} />
    </div>
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/login" elemet={() => <Login setIsAuth={setIsAuth} isAuth={isAuth} />}
        />
        <Route path="/" element={Main} />
        <Route path="/register" element={Register} />
        <Route path="/about" element={About} />
        <Route component={AuthContainer} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;