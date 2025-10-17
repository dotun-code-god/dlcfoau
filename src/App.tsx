import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import GiftPage from "./pages/gift";
import NotFoundPage from "./pages/not-found";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/gift" element={<GiftPage />} />
      </Routes>
    </BrowserRouter>
  )
}
