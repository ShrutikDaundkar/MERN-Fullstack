import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './login';
import Register from './Register';
import Product from './Product';
function App() {
  return (
    <div className="App">
     <BasicRouting />
      
     </div>
  );
}

function BasicRouting(){
  return(
    <div>
      <h1>Basic Routing Component</h1>
      <p>This component demonstrates basic routing in React.</p>
      <Router>
        <Link to="/"> Home </Link>| 
        <Link to="/hello"> Hello </Link>|
        <Link to="/contact"> Contact </Link>|
        <Link to="/product"> Product </Link>|
        <Link to ="/login"> Login </Link>|
        <Link to ="/register"> Register </Link>
        <hr>
        </hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
</Routes>
      </Router>
    </div>
  );
}

function Home(){
  return(
    <div>
      <h1>Home Component</h1>
      <p>Welcome to the home page.</p>
    </div>
  );
}

function Hello(){
  return(
    <div>
      <h1>Hello World Component</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

function Contact(){
  return(
    <div>
      <h1>Contact Component</h1>
      <p>This is the contact page.</p>
    </div>
  );
}
export default App;
