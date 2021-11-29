import "./App.scss";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
function App() {
  return (
    <div>
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
