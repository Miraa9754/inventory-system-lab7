import { Link, Route, Routes } from "react-router-dom";

import AdminInventory from "./pages/AdminInventory";
import AdminInventoryCreate from "./pages/AdminInventoryCreate";
import AdminInventoryEdit from "./pages/AdminInventoryEdit";
import AdminInventoryDetails from "./pages/AdminInventoryDetails";

import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Система складу</h1>

        <nav>
          <Link to="/">Адмін панель</Link>

          <Link to="/inventory/create">
            Додати інвентар
          </Link>

          <Link to="/gallery">Галерея</Link>

          <Link to="/favorites">Улюблені</Link>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<AdminInventory />} />

          <Route
            path="/inventory/create"
            element={<AdminInventoryCreate />}
          />

          <Route
            path="/inventory/:id"
            element={<AdminInventoryDetails />}
          />

          <Route
            path="/inventory/:id/edit"
            element={<AdminInventoryEdit />}
          />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;