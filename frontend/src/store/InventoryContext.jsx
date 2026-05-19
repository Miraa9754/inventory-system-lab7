import { createContext, useCallback, useEffect, useState } from "react";
import {
  deleteInventoryItem,
  getInventory,
} from "../services/inventoryApi";

export const InventoryContext = createContext();

export function InventoryProvider({ children }) {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadInventory = useCallback(async function () {
    try {
      setLoading(true);
      setError("");

      const data = await getInventory();

      setInventory(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  async function removeInventoryItem(id) {
    await deleteInventoryItem(id);
    await loadInventory();
  }

  useEffect(() => {
    loadInventory();
  }, [loadInventory]);

  return (
    <InventoryContext.Provider
      value={{
        inventory,
        loading,
        error,
        loadInventory,
        removeInventoryItem,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}
export default InventoryProvider;