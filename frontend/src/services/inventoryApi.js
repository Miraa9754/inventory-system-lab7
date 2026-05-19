const API_URL = "http://localhost:3000";

export function getPhotoUrl(photo) {
  if (!photo) {
    return null;
  }

  return `${API_URL}/uploads/${photo}`;
}

export async function getInventory() {
  const response = await fetch(`${API_URL}/inventory`);

  if (!response.ok) {
    throw new Error("Не вдалося завантажити інвентар");
  }

  return response.json();
}

export async function getInventoryItem(id) {
  const response = await fetch(`${API_URL}/inventory/${id}`);

  if (!response.ok) {
    throw new Error("Не вдалося завантажити деталі інвентарю");
  }

  return response.json();
}

export async function createInventoryItem(formData) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Не вдалося створити інвентар");
  }

  return response.json();
}

export async function updateInventoryText(id, data) {
  const response = await fetch(`${API_URL}/inventory/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Не вдалося оновити текстові дані");
  }

  return response.json();
}

export async function updateInventoryPhoto(id, formData) {
  const response = await fetch(`${API_URL}/inventory/${id}/photo`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Не вдалося оновити фото");
  }

  return response.json();
}

export async function deleteInventoryItem(id) {
  const response = await fetch(`${API_URL}/inventory/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Не вдалося видалити інвентар");
  }

  return response.json();
}