import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="flex container mx-auto p-2">
          <Link to="/">
            <h2 className="text-white text-2xl font-bold">CRUD</h2>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
