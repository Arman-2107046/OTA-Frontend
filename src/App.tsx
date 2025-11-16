import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const App = () => {

  const {user}=useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/register' element={user?<Home/>:<Register />} />
          <Route path='/login' element={user?<Home/>:<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
