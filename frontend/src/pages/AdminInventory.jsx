import { useState } from "react";
import ConfirmModal from "../components/inventory/ConfirmModal";
import InventoryTable from "../components/inventory/InventoryTable";
import { useInventory } from "../store/InventoryContext";

function AdminInventory() {
  const { inventory, loading, error, removeInventoryItem } =
    useInventory();

  const [selectedItem, setSelectedItem] = useState(null);

  async function handleConfirmDelete() {
    await removeInventoryItem(selectedItem.id);

    setSelectedItem(null);
  }

  if (loading) {
    return <p className="status">Завантаження інвентарю...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (inventory.length === 0) {
    return <p className="status">Інвентар поки відсутній</p>;
  }

  return (
    <div>
      <h2>Список інвентарю</h2>

      <InventoryTable
        inventory={inventory}
        onDeleteClick={setSelectedItem}
      />

      {selectedItem && (
        <ConfirmModal
          title="Видалення інвентарю"
          message={`Ви впевнені, що хочете видалити "${selectedItem.inventory_name}"?`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default AdminInventory;