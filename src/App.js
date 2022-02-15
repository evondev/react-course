import React, { useState } from "react";
import ModalBase from "./components/modal/ModalBase";

const App = () => {
  const [openModalBase, setOpenModalBase] = useState(false);
  return (
    <div className="p-5">
      <button
        className="p-5 rounded-lg text-white text-center bg-blue-400"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="bg-white p-10 rounded-lg w-full max-w-[320px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          vitae, et obcaecati reiciendis, labore cumque dolorum est veritatis
          repellendus dolor repellat, modi maiores porro minima quae ut magnam!
          Obcaecati, eos!
        </div>
      </ModalBase>
    </div>
  );
};

export default App;
