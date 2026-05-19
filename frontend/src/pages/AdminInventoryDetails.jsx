import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryDetails from "../components/inventory/InventoryDetails";
import { getInventoryItem } from "../services/inventoryApi";

function AdminInventoryDetails() {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadItem() {
      try {
        setLoading(true);

        const data = await getInventoryItem(id);

        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadItem();
  }, [id]);

  if (loading) {
    return <p className="status">Завантаження деталей...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div>
      <h2>Деталі інвентарю</h2>

      <InventoryDetails item={item} />
    </div>
  );
}

export default AdminInventoryDetails;