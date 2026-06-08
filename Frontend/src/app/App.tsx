import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Adult } from "./pages/Adult";
import { Student } from "./pages/Student";
import { About } from "./pages/About";
import {Contact } from "./pages/Contact";
import { Login }from "./pages/Login";
import {Register} from "./pages/Register";
import {ModelDetails} from "./pages/ModelDetails";
import {PredictionForm} from "./pages/PredictionForm";
import PredictionResult from "./pages/PredictionResult";
import VerifyOtp from "./pages/VerifyOtp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* CORE */}
        <Route path="/" element={<Home />} />
        <Route path="/adult" element={<Adult />} />
        <Route path="/student" element={<Student />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* MODELS FLOW */}
        <Route path="/model/:id" element={<ModelDetails />} />
        <Route path="/predict/:id" element={<PredictionForm />} />
        <Route path="/result/:id" element={<PredictionResult />} />

        {/* FALLBACK */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
