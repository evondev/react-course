import React from "react";
import Accordion from "./components/advanced-react/react-composition/Accordion";
const App = () => {
  return (
    <div className="p-10 w-full max-w-[600px] mx-auto">
      <Accordion header="Can I change my plan later">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          officiis quam adipisci consequuntur voluptate? Harum, ipsam est quo
          iusto, labore ipsa rem repellat distinctio debitis commodi eos. Magni,
          officia voluptate.
        </div>
      </Accordion>
      <Accordion header="Can I become a Frontend Developer">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          officiis quam adipisci consequuntur voluptate? Harum, ipsam est quo
          iusto, labore ipsa rem repellat distinctio debitis commodi eos. Magni,
          officia voluptate.
        </div>
      </Accordion>
    </div>
  );
};

export default App;
