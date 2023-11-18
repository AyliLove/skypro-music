import { Link } from 'react-router-dom'
import * as S from './AuthPage.styles'
import { useContext, useEffect, useState } from 'react'
import { userLogin, userRegister } from '../../../api'
import { userContext } from '../../../App'

export default function AuthPage({ isLoginMode }) {
  const { setUser } = useContext(userContext)

  const [error, setError] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const getErrorMessage = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        getErrorMessage(obj[key])
      } else {
        setError(obj[key])
      }
    }
  }

  const handleLoginAPI = async ({ email, password }) => {
    if (email === '') {
      setError('Не заполнен Email')
      return
    }
    if (password === '') {
      setError('Не введен пароль')
      return
    }
    userLogin({ email, password })
      .then((responseData) => {
        if (responseData.id) {
          setUser(responseData.username)
          window.location.href = '/'
          return
        }
        getErrorMessage(responseData)
      })
      .catch((error) => {
        if (error.message === 'Сервер сломался, попробуй позже') {
          alert(error.message)
        }
        if (window.navigator.onLine === false) {
          alert('Проблемы с интернетом, проверьте подключение')
        }
        console.warn(error)
      })
  }

  const handleRegisterAPI = async () => {
    if (name === '') {
      setError('Не заполнено имя пользователя')
      return
    }
    if (email === '') {
      setError('Не заполнен Email')
      return
    }
    if (password === '') {
      setError('Не введен пароль')
      return
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }

    userRegister({ name, email, password })
      .then((responseData) => {
        if (responseData.id) {
          alert(`Пользователь ${responseData.username} успешно зарегистрирован`)
          setUser(responseData.username)
          window.location.href = '/'
          return
        }
        getErrorMessage(responseData)
      })
      .catch((error) => {
        if (error.message === 'Сервер сломался, попробуй позже') {
          alert(error.message)
        }
        if (window.navigator.onLine === false) {
          alert('Проблемы с интернетом, проверьте подключение')
        }
        console.warn(error)
      })
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                onClick={() => handleLoginAPI({ email, password })}
              >
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя пользователя"
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegisterAPI}>
                Зарегистрироваться
              </S.PrimaryButton>
              <Link to="/login">
                <S.SecondaryButton>Войти</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}