import logo from './logo.svg';
import './App.css';
import Login from './login';

function App() {
  return (
    <div className="App">
     <Login ></Login>
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
