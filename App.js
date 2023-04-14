import './App.css';

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
//Pages
const Login = React.lazy(() => import("./views/pages/Login"));
const Register = React.lazy(() => import("./views/pages/Register")); 

function App() {
  return (
    <div className="App">
       
    </div>
  );
}

export default App;
