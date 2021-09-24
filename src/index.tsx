import { FC } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/index.scss";
import Routes from "./routes/routes";
import Header from "./components/Header/Header";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
