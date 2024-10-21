import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";




function App() {
	const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
	return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      <div className="p-4 h-screen flex items-center justify-center">
       {/* <GenerateComponent/> */}
        <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
        <Toaster />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
