import { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/index.scss";
import Routes from "./routes/routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
};

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
