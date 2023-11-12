const HOST = "https://skypro-music-api.skyeng.tech/catalog/";

export async function getAllTracks() {
  const response = await fetch(`${HOST}track/all/`);

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();

  return data;
}

