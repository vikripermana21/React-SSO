import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.page";
import Callback from "./pages/callback/callback.page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/google/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
