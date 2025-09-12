import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PizzaDetails from "./components/PizzaDetails";
import PizzaPage from "./pages/PIzzaPage";
import "./index.css";
import BbqChicken from "./pages/BBQChicken";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<PizzaPage />} />
          <Route path="/pizza/:id" element={<PizzaDetails />} />
          <Route path="/BBQ Chicken" element={<BbqChicken />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
