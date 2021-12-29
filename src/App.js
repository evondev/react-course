import "./App.scss";
import React, { useEffect, useRef, useState } from "react";
import StopWatch from "./components/StopWatch";
import Input from "./components/Input";
import TextareaAutoResize from "./components/TextareaAutoResize";
import Dropdown from "./components/Dropdown";
import Blog from "./components/Blog";
// import Counter from "./components/counter/Counter";
// import Header from "./components/Header";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
// import Photos from "./components/photo/Photos";
// import Timer from "./components/Timer";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import CardTailwind from "./components/card/CardTailwind";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#ff6bcb",
//   },
//   orange: "#ffa400",
// };
function App() {
  // const [count, setCount] = React.useState(0);
  // const countRef = React.useRef(0);
  // const handle = () => {
  //   const updateCount = countRef.current + 1;
  //   console.log(`Clicked ${updateCount} times`);
  //   countRef.current++;
  // };
  // console.log("Render");
  // useEffect(() => {
  //   const timer = setInterval();
  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, []);

  return (
    <div>
      {/* <StopWatch></StopWatch> */}
      {/* <Input></Input> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      {/* <div className="p-5">
        <Dropdown></Dropdown>
      </div> */}
      <Blog></Blog>
    </div>
  );
}

export default App;
