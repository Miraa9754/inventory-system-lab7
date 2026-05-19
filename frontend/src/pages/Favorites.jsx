import InventoryGallery from "../components/gallery/InventoryGallery";

import { useInventory } from "../store/useInventory";
import { useFavorites } from "../hooks/useFavorites";

function Favorites() {
  const { inventory } = useInventory();

  const {
    favorites,
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const favoriteItems = inventory.filter((item) =>
    favorites.includes(item.id)
  );

  return (
    <div>
      <h2>Улюблені товари</h2>

      {favoriteItems.length === 0 ? (
        <p className="status">
          У вас поки немає улюблених товарів
        </p>
      ) : (
        <InventoryGallery
          inventory={favoriteItems}
          onOpen={() => {}}
          onToggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      )}
    </div>
  );
}

export default Favorites;