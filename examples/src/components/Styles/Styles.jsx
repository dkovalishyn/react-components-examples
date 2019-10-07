import React from "react";
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import CssStyles from "./CssStyles";
import InlineStyles from "./InlineStyles";
import Preprocessors from "./Preprocessors";
import StyledComponents from "./StyledComponets";
import CssModules from "./CssModules";
import "./styles.scss";

const Styles = ({ match: { path } }) => (
  <section className="styles">
    <aside>
      <nav>
        <li>
          <NavLink to={`${path}/css-styles`}>Css styles</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/css-modules`}>Css modules</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/inline-styles`}>Inline styles</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/preprocessors`}>Preprocessors</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/styled-components`}>Styled components</NavLink>
        </li>
      </nav>
    </aside>
    <main>
      <Switch>
        <Route path={`${path}/css-styles`} component={CssStyles}/>
        <Route path={`${path}/css-modules`} component={CssModules}/>
        <Route path={`${path}/inline-styles`} component={InlineStyles}/>
        <Route path={`${path}/preprocessors`} component={Preprocessors}/>
        <Route path={`${path}/styled-components`} component={StyledComponents}/>
        <Redirect to={`${path}/css-styles`}/>
      </Switch>
    </main>
  </section>
);

export default Styles;
