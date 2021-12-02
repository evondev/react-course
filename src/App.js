import "./App.scss";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    blue: "#ff6bcb",
  },
  orange: "#ffa400",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card2></Card2>
      </CardList>
    </ThemeProvider>
  );
}

export default App;
