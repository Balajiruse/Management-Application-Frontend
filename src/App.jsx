import { useDispatch } from "react-redux";
import { Getallbooks } from "./Addapi/Booksapi"
import { updateinfo } from "./Reducers/booksreducer";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./Page/mainpage";
import Booksaddpage from "./Page/booksadd";
import Bookseditpage from "./Page/booksedit";
import Authordisplaypage from "./Page/authordisplay";
import Authoraddpage from "./Page/authoradd";
import Authoreditpage from "./Page/authoredit";
import { useEffect } from "react";
import Booksdisplaypage from "./Page/booksdisplay";
import { Getallauthor } from "./Addapi/authorapi"
import { updateauthorinfo } from "./Reducers/authorreducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Getallbooks().then((data) => dispatch(updateinfo(data)));
    Getallauthor().then((data)=>dispatch(updateauthorinfo(data)))
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route path="/books" element={<Booksdisplaypage />} />
        <Route path="/booksadd" element={<Booksaddpage />} />
        <Route path="/booksedit/:id" element={<Bookseditpage />} />
        <Route path="/author" element={<Authordisplaypage />} />
        <Route path="/authoradd" element={<Authoraddpage />} />
        <Route path="/authoredit/:id" element={<Authoreditpage />} />
      </Routes>
    </div>
  );
}

export default App;
