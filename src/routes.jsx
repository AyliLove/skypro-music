import { Route, Routes } from 'react-router-dom'
import { Main } from './Pages/Main/Main'
// import { Login } from './Pages/Login/login'
import { Favorites } from './Pages/Favorites'
// import { Register } from './Pages/Register'
import { NotFound } from './Pages/not-found'
import { Category } from './Pages/Category'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { userContext } from './App'
import { useContext } from 'react'
import AuthPage from './Pages/Auth/AuthPage'

export const AppRoutes = () => {
  const { user } = useContext(userContext)

  return (
    <Routes>
      <Route path="/Login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/Register" element={<AuthPage isLoginMode={false} />} />

      <Route
        element={
          <ProtectedRoute redirectPath={'/Login'} isAllowed={Boolean(user)} />
        }
      >
        <Route path="/" element={<Main />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Category/:id" element={<Category />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}