import { Link, Route, Routes } from "react-router-dom";
import AdminInventory from "./pages/AdminInventory";
import AdminInventoryCreate from "./pages/AdminInventoryCreate";
import AdminInventoryEdit from "./pages/AdminInventoryEdit";
import AdminInventoryDetails from "./pages/AdminInventoryDetails";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Система складу</h1>

        <nav>
          <Link to="/">Інвентар</Link>
          <Link to="/inventory/create">Додати інвентар</Link>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<AdminInventory />} />
          <Route path="/inventory/create" element={<AdminInventoryCreate />} />
          <Route path="/inventory/:id" element={<AdminInventoryDetails />} />
          <Route path="/inventory/:id/edit" element={<AdminInventoryEdit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;