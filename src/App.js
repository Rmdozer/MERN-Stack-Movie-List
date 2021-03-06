import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import logo from "./logo.svg";

class App extends Component{
  render() {
    document.body.style.backgroundColor = "black";
    return(
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
              <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
              </a>
              <Link to="/" className="navbar-brand">MERN-Stack Movie Database App</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link style={{color: 'white' }} to="/" className="nav-link">Movies</Link>
                  </li>
                  <li className="navbar-item">
                    <Link style={{color: 'white' }} to="/create" className="nav-link">Add Movie</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/>
            <Route path="/" exact component={TodosList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />
          </div>
        </Router>
    );
  }
}

export default App;
