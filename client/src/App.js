import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Register from './views/Register';
import Login from './views/Login';
import Products from './views/Products';
import AddProduct from './views/AddProduct';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  }
  const logout = () => {
    setLoggedIn(false);
  }

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} logout={logout}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login login={login}/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/products">
              <Products loggedIn={loggedIn}/>
            </Route>
            <Route path="/addproduct">
              <AddProduct loggedIn={loggedIn}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
