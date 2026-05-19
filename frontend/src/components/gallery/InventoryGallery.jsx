import InventoryCard from "./InventoryCard";

function InventoryGallery({
  inventory,
  onOpen,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div className="galleryGrid">
      {inventory.map((item) => (
        <InventoryCard
          key={item.id}
          item={item}
          onOpen={onOpen}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite(item.id)}
        />
      ))}
    </div>
  );
}

export default InventoryGallery;