import { useState } from "react";

function InventoryForm({
  initialValues = {
    inventory_name: "",
    description: "",
  },
  submitText = "Зберегти",
  showPhotoInput = true,
  onSubmit,
}) {
  const [inventoryName, setInventoryName] = useState(
    initialValues.inventory_name
  );
  const [description, setDescription] = useState(initialValues.description);
  const [photo, setPhoto] = useState(null);
  const [validationError, setValidationError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!inventoryName.trim()) {
      setValidationError("Назва інвентарю є обов’язковою");
      return;
    }

    setValidationError("");

    onSubmit({
      inventory_name: inventoryName,
      description,
      photo,
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {validationError && <p className="error">{validationError}</p>}

      <label>
        Назва інвентарю *
        <input
          type="text"
          value={inventoryName}
          onChange={(event) => setInventoryName(event.target.value)}
          placeholder="Наприклад: Ноутбук Lenovo"
        />
      </label>

      <label>
        Опис
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Короткий опис інвентарю"
          rows="5"
        />
      </label>

      {showPhotoInput && (
        <label>
          Фото
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setPhoto(event.target.files[0])}
          />
        </label>
      )}

      <button className="btn" type="submit">
        {submitText}
      </button>
    </form>
  );
}

export default InventoryForm;