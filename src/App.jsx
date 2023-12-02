
import { useEffect, useState } from 'react';
import './App.css'
import { GetallUsers } from './Addapi/api';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './Page/mainpage';
import Addpage from './Page/Addpage';
import Editpage from './Page/Editpage';

function App() {
  const [info, setinfo] = useState();
  useEffect(()=>{
    GetallUsers().then((data)=>{setinfo(data);} );
   },[])
  return (
   <div className="App">
    <Routes>
      <Route exact path='/' element={<Mainpage/>}/>
      <Route path='/adduser' element={<Addpage info={info} setinfo={setinfo}/>}/>
      <Route path='/edituser/:id' element={<Editpage info={info} setinfo={setinfo}/>}/>


    </Routes>
   </div>
  )
}

export default App