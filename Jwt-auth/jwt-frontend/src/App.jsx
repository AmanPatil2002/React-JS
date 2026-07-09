import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Mycomponent/Login";
import Register from "./Mycomponent/Register";
import Home from "./Mycomponent/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Register />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;