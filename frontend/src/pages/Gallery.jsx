import { useState } from "react";

import InventoryGallery from "../components/gallery/InventoryGallery";
import InventoryQuickView from "../components/gallery/InventoryQuickView";

import { useInventory } from "../store/useInventory";
import { useFavorites } from "../hooks/useFavorites";

function Gallery() {
  const { inventory, loading, error } = useInventory();

  const [selectedItem, setSelectedItem] = useState(null);

  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  if (loading) {
    return <p className="status">Завантаження галереї...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div>
      <h2>Галерея інвентарю</h2>

      <InventoryGallery
        inventory={inventory}
        onOpen={setSelectedItem}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />

      {selectedItem && (
        <InventoryQuickView
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default Gallery;