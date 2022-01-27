import { FooterContainer } from "./containers/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JumbotronContainer } from "./containers/jumbotron";
import { FaqsContainer } from "./containers/faqs";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
