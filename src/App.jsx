import { Route, Routes } from 'react-router'
import './App.css'

import Mainpage from './Page/Mainpagee'
import Cartpage from './Page/Cartpagee' 
import { useEffect } from 'react';
import { GetAllproducts } from './Addapi/Apii';
import { updateinfo } from './Redux/redux';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    GetAllproducts()
      .then((data) => {
        dispatch(updateinfo(data));
      })
      .catch((error) => {
        console.log("Error fetching product data:", error);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Mainpage />} />
        <Route path='/cart/:id' element={<Cartpage  />} />  
      </Routes>
    </div>
  )
}

export default App