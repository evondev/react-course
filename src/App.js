import "./App.scss";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
}

export default App;
