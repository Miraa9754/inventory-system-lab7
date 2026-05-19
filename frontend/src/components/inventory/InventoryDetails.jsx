import { getPhotoUrl } from "../../services/inventoryApi";

function InventoryDetails({ item }) {
  return (
    <div className="detailsCard">
      {item.photo ? (
        <img
          className="detailsImage"
          src={getPhotoUrl(item.photo)}
          alt={item.inventory_name}
        />
      ) : (
        <div className="detailsPlaceholder">Фото відсутнє</div>
      )}

      <div>
        <h2>{item.inventory_name}</h2>
        <p>{item.description || "Опис відсутній"}</p>
      </div>
    </div>
  );
}

export default InventoryDetails;