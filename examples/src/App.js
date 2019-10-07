import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import TimeViewer from "./components/TimeViewer/TimeViewer";
import Posts from "./components/Posts";
import Styles from "./components/Styles";
import RenderProps from "./components/RenderProps";
import AddStudentForm from './components/StudentsList/AddStudentForm';
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <header>
          <nav>
            <li>
              <NavLink to="/time-viewer">Time viewer</NavLink>
            </li>
            <li>
              <NavLink to="/students-list">Students list</NavLink>
            </li>
            <li>
              <NavLink to="/posts">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/render-props">Render props</NavLink>
            </li>
            <li>
              <NavLink to="/styles">Styles</NavLink>
            </li>
          </nav>
        </header>
        <Switch>
          <Route path="/time-viewer" component={TimeViewer} />
          <Route path="/students" component={AddStudentForm} />
          <Route path="/posts" component={Posts} />
          <Route path="/render-props" component={RenderProps} />
          <Route path="/styles" component={Styles} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
