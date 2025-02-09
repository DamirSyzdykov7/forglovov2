import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { ProfilePage } from "./pages/ProfilePage";
import { Header } from "./widgets/Header";
import { useState } from "react";

function App() {
  const [isSwitched, setIsSwitched] = useState(false);
  return (
    <div className="m-0 p-0 font-sans bg-slate-100 relative">
      <Header isSwitched={isSwitched} setIsSwitched={setIsSwitched} />
      <div className="py-[5%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
