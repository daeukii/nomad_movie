import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./routes/Home";
import Movie from "./routes/Detail"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Movie />}></Route>
        <Route path="/" element={<Home />}>go back</Route>
      </Routes>
    </Router>
  )
}
export default App; 