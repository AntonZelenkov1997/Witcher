import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import publicPaths from "./paths";

const Routes: FC = () => {
  return (
    <Switch>
      {publicPaths.map(({ exact, component, path, key }) => (
        <Route exact={exact} component={component} path={path} key={key} />
      ))}
    </Switch>
  );
};

export default Routes;
