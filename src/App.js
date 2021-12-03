import "./App.scss";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import CardTailwind from "./components/card/CardTailwind";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#ff6bcb",
//   },
//   orange: "#ffa400",
// };
function App() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}>
    </ThemeProvider> */}
      {/* <GlobalStyles></GlobalStyles> */}
      <CardList>
        <CardTailwind primary={true} fontSize="text-2xl"></CardTailwind>
      </CardList>
    </div>
  );
}

export default App;
