import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import GiftPage from "./pages/gift";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift" element={<GiftPage />} />
      </Routes>
    </BrowserRouter>
  )
}
