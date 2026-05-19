import { useNavigate } from "react-router-dom";
import InventoryForm from "../components/inventory/InventoryForm";
import { createInventoryItem } from "../services/inventoryApi";
import { useInventory } from "../store/InventoryContext";

function AdminInventoryCreate() {
  const navigate = useNavigate();

  const { loadInventory } = useInventory();

  async function handleCreate(data) {
    try {
      const formData = new FormData();

      formData.append("inventory_name", data.inventory_name);
      formData.append("description", data.description);

      if (data.photo) {
        formData.append("photo", data.photo);
      }

      await createInventoryItem(formData);

      await loadInventory();

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h2>Додати інвентар</h2>

      <InventoryForm
        submitText="Створити"
        onSubmit={handleCreate}
      />
    </div>
  );
}

export default AdminInventoryCreate;