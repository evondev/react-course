import React from "react";
import Switch from "./components/switch/Switch";
function useToggle() {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  function getToggleProps({ onClick, ...rest } = {}) {
    return {
      onClick: () => {
        onClick && onClick();
        toggle();
      },
      ...rest,
    };
  }
  // toggleProps
  return {
    on,
    toggle,
    getToggleProps,
    // toggleProps: {
    //   onClick: toggle,
    // },
  };
}
// Props collection - Kentc Dodds - creator of Remix
// Props getter
const App = () => {
  const { on, toggleProps, getToggleProps } = useToggle();
  return (
    <div>
      <Switch {...getToggleProps({ on })} />
      <hr />
      <button
        aria-label="custom-button"
        {...getToggleProps({
          onClick: () => console.info("onButtonClicked"),
        })}

        // onClick={() => {
        //   console.log("onButtonClick");
        //   toggleProps.onClick();
        // }}
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
};

export default App;
