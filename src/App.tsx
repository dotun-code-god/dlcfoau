import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/home";
import UploadComponent from "./components/UploadComponent";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;