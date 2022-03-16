const { createContext, useContext } = require("react");
const { default: useToggle } = require("./useToggle");

const AccordionContext = createContext();
function AccordionProvider(props) {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  const values = { show, handleToggleShow };
  return (
    <AccordionContext.Provider
      value={values}
      {...props}
    ></AccordionContext.Provider>
  );
}
function useAccordion() {
  const context = useContext(AccordionContext);
  if (typeof context === "undefined")
    throw new Error("useAccordion must be used within AcoordionProvider");
  return context;
}
export { useAccordion, AccordionProvider };
