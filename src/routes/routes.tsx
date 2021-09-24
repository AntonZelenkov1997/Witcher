import { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import publicPaths from "./paths";

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        {publicPaths.map(({ exact, component, path, key }) => (
          <Route exact={exact} component={component} path={path} key={key} />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes
