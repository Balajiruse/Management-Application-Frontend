
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import ForgotPage from './Pages/ForgotPage'
import ResetPage from './Pages/ResetPage'
import DashboardPage from './Pages/DashboardPage'
import AddProductPage from './Pages/AddProduct'
import EditProductPage from './Pages/EditProductPage'
import CartPage from './Pages/CartPage'
import ActivationPage from './Pages/ActivationPage'


function App() {
   //Routes and Route is imported from React router dom for navigation between pages
  return (
    <Routes>
      <Route exact path="/" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/forgot" element={<ForgotPage/>}/>
      <Route path="/reset/:id" element={<ResetPage/>}/>
      <Route path="/activation/:id" element={<ActivationPage/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/addproduct" element={<AddProductPage/>}/>
      <Route path="/editproduct" element={<EditProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  )
}

export default App
