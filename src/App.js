import Jumbotron from "./components/jumbotron";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";
import jumboData from "./fixtures/jumbo.json";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}
