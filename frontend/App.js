
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/navbar';
import Home from './pages/home';
import AddUser from './users/adduser';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import EditUser from './users/edituser';
import ViewUser from './users/viewuser';


function App() {
  return (
    <div className="Apsp">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
