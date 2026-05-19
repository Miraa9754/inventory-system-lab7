import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InventoryForm from "../components/inventory/InventoryForm";

import {
  getInventoryItem,
  updateInventoryPhoto,
  updateInventoryText,
} from "../services/inventoryApi";

import { useInventory } from "../store/useInventory";

function AdminInventoryEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { loadInventory } = useInventory();

  const [item, setItem] = useState(null);

  useEffect(() => {
    async function loadItem() {
      const data = await getInventoryItem(id);

      setItem(data);
    }

    loadItem();
  }, [id]);

  async function handleUpdate(data) {
    try {
      await updateInventoryText(id, {
        inventory_name: data.inventory_name,
        description: data.description,
      });

      if (data.photo) {
        const formData = new FormData();

        formData.append("photo", data.photo);

        await updateInventoryPhoto(id, formData);
      }

      await loadInventory();

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  if (!item) {
    return <p className="status">Завантаження...</p>;
  }

  return (
    <div>
      <h2>Редагування інвентарю</h2>

      <InventoryForm
        initialValues={item}
        submitText="Оновити"
        onSubmit={handleUpdate}
      />
    </div>
  );
}

export default AdminInventoryEdit;