import { getPhotoUrl } from "../../services/inventoryApi";

function InventoryQuickView({ item, onClose }) {
  return (
    <div className="modalOverlay">
      <div className="quickViewModal">
        <button className="closeBtn" onClick={onClose}>
          ✕
        </button>

        <img
          className="quickViewImage"
          src={getPhotoUrl(item.photo)}
          alt={item.inventory_name}
        />

        <h2>{item.inventory_name}</h2>

        <p>{item.description || "Опис відсутній"}</p>
      </div>
    </div>
  );
}

export default InventoryQuickView;