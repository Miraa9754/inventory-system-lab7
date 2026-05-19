import { getPhotoUrl } from "../../services/inventoryApi";

function InventoryCard({
  item,
  onOpen,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div className="galleryCard">
      <button
        className={`favoriteBtn ${
          isFavorite ? "favoriteActive" : ""
        }`}
        onClick={() => onToggleFavorite(item.id)}
      >
        ❤️
      </button>

      <img
        className="galleryImage"
        src={getPhotoUrl(item.photo)}
        alt={item.inventory_name}
        onClick={() => onOpen(item)}
      />

      <div className="galleryContent">
        <h3>{item.inventory_name}</h3>
      </div>
    </div>
  );
}

export default InventoryCard;