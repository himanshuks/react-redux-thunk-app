import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Posts } from "./components/Posts";

export const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/counter">
            <Counter />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
