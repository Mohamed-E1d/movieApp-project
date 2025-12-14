import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Notfound from "./pages/Notfound/Notfound";
import Signup from "./pages/Signup/Signup";
import { ToastContainer, Bounce } from "react-toastify";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
           <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
    </>
  );
}

export default App;
