import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import VideoDetail from "../components/VideoDetail";
import LoginPage from "../components/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/videos" element={<VideoDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
