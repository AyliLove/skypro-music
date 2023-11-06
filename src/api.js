export async function getTodos() {
  const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
  
  
  if (!response.ok) {
    throw new Error ("Ошибка сервера")
  }
  
  const tracks = await response.json();
  return tracks
}
