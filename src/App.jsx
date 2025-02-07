import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="m-0 p-0 font-sans bg-slate-100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
