import { Route, Routes } from 'react-router-dom'
import { Main } from './Pages/Main/Main'
import { Login } from './Pages/Login/login'
import { Favorites } from './Pages/Favorites'
import { Register } from './Pages/Register'
import { NotFound } from './Pages/not-found'
import { Category } from './Pages/Category'
import { ProtectedRoute } from './ProtectedRoute'

export const AppRoutes = ({user, onClick}) => {
  return (
    <Routes>
      <Route path="/Login" element={<Login onClick={onClick} />}  />
      <Route path="/Register" element={<Register />} />

      <Route element={<ProtectedRoute redirectPath={'/Login'} isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main /> } />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Category/:id" element={<Category />} />
      </Route>

      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}