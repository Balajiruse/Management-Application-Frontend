

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


}