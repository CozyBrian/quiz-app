import { Route, Routes } from "react-router-dom";
import "./app.css";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Quiz from "./pages/quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path=":quiz" element={<Quiz />} />
      </Route>
    </Routes>
  )
}

export default App
