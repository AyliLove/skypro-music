const HOST = 'https://skypro-music-api.skyeng.tech/'

export async function getAllTracks() {
  const response = await fetch(`${HOST}catalog/track/all/`)

  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }

  const data = await response.json()

  return data
}

export const userRegister = async ({ name, email, password }) => {
  return fetch(`${HOST}user/signup/`, {
    method: 'POST',
    body: JSON.stringify({
      username: name,
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {


    if (response.status === 201) {
      return response.json()
    }
    if (response.status === 400) {
      return response.json()
    }
    if (response.status === 500) {
      throw new Error('Сервер сломался, попробуй позже')
    }
    throw new Error(`Неизвестная ошибка авторизации`);
  })
}

export async function userLogin({ email, password }) {
  const response = await fetch(`${HOST}user/login/`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
   
      'content-type': 'application/json',
    },
  })
  if (response.status === 500) {
    throw new Error('Сервер упал, попробуй позже')
  }

  const user = await response.json()
  return user
}