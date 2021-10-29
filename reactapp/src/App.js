import './App.css';
import Home from './Home/Home.js';
import About from './About/About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function User(id, fname, lname, email){
  this.id = id;
  this.fname = fname;
  this.lname = lname;
  this.email = email;
}

function App() {
  var userList = [new User(1, "John", "Snow", "jsnow@acmuic.org"),new User(2, "Christian", "Bingman", "cbingm@acmuic.org")]
  return (
    <Router>
      <header>
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
          <a href="/" className="navbar-brand"><img className="logo mx-3" src="acmlogo.png" alt="ACM User Manager Logo" />ACM User Manager</a>
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/about" className="nav-item nav-link">Documentation</Link>
          </div>
        </nav>
      </header>
      <div className="container-fluid">
        <div className="container-lg">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home userList={userList}/>
            </Route>
          </Switch>
        </div>
      </div>

      <footer>
        <hr />
        <div id="copy" className="mx-2">&copy; ACM@UIC 2021-2022</div>
      </footer>
    </Router>
  );
}



export default App;
