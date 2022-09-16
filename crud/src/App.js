import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { CreateTips } from "./pages/CreateTips";


function App() {
  return <>

  <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="/" element={<Home />} />
    <Route path="/create-tips" element={<CreateTips />} />

  </Routes>




  </>
  );
}

export default App;
