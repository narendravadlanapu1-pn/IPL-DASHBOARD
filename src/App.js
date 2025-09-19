import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Teams from "./components/Teams";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams/:id" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
