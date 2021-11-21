import "./styles/App.css";
import Counter from "./components/Counter";
import YoutubeList from "./components/YoutubeList";
function App() {
  // State
  return (
    <div>
      <YoutubeList></YoutubeList>
      <Counter></Counter>
    </div>
  );
}

export default App;
