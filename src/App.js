import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import HomePage from "./Components/HomePage/HomePage";
import NewsPage from "./Components/News/NewsPage";
import LiteracyPage from "./Components/Literacy/LiteracyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/literacy" element={<LiteracyPage />} />
          {/* <Route path="literacyDetails/:eid" element={<LiteracyDetailsPage />} /> */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
