
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Bootem from "./components/Bootem";
import Singup from "./components/Singup";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./components/Login";
import Addproduct from "./components/Addproduct";
import Productlist from "./components/Productlist";

import Updates from "./components/Updates";
import Updatelist from "./components/Updatelist";
import Profil from "./components/Profil";

function App() {
  return (
   <>
  
   <Router>
   <Navbar />
<Routes>
  <Route element={<PrivateRoutes/> }>
<Route path="/"  element={<Productlist/>} />
<Route path="/addProducts"  element={<Addproduct/>} />
<Route path="/updates"  element={<Updatelist />} />
<Route path="/update/:id"  element={<Updates/>} />
<Route path="logout"/>
<Route path="profil"  element={<Profil/>} />
</Route>

<Route path="/login"  element={<Login />}/>
<Route path="singup"  element={<Singup />}/>

</Routes>

<Bootem />

   </Router>
   </>
  );
}

export default App;
