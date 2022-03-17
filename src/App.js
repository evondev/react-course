import React from "react";
import Switch from "./components/switch/Switch";
function useToggle() {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return { on, toggle };
}
const App = () => {
  const { on, toggle } = useToggle();
  return (
    <div>
      <Switch on={on} onClick={toggle} />
      <hr />
      <button aria-label="custom-button">{on ? "on" : "off"}</button>
    </div>
  );
};

export default App;
