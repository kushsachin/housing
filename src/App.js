import "./index.css";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropertyManagementServices from "./Pages/PropertyManagementServices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/property-management-services"
          element={<PropertyManagementServices />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
