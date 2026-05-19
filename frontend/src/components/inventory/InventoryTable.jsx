import { Link } from "react-router-dom";
import { getPhotoUrl } from "../../services/inventoryApi";

function InventoryTable({ inventory, onDeleteClick }) {
  return (
    <div className="tableWrapper">
      <table className="inventoryTable">
        <thead>
          <tr>
            <th>Фото</th>
            <th>Назва інвентарю</th>
            <th>Опис</th>
            <th>Дії</th>
          </tr>
        </thead>

        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>
                {item.photo ? (
                  <img
                    className="tableImage"
                    src={getPhotoUrl(item.photo)}
                    alt={item.inventory_name}
                  />
                ) : (
                  <span className="noPhoto">Немає фото</span>
                )}
              </td>

              <td>{item.inventory_name}</td>
              <td>{item.description || "Без опису"}</td>

              <td>
                <div className="actions">
                  <Link className="btn small" to={`/inventory/${item.id}`}>
                    Переглянути
                  </Link>

                  <Link
                    className="btn small warning"
                    to={`/inventory/${item.id}/edit`}
                  >
                    Редагувати
                  </Link>

                  <button
                    className="btn small danger"
                    onClick={() => onDeleteClick(item)}
                  >
                    Видалити
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;