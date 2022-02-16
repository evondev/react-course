import React, { useState } from "react";
import ModalAdvanced from "../components/modal/ModalAdvanced";
import ModalBase from "../components/modal/ModalBase";
import TooltipAdvanced from "../components/tooltip/TooltipAdvanced";

const App = () => {
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="p-5 flex justify-center items-center h-screen">
      <button
        className="p-5 rounded-lg text-white text-center bg-blue-400"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <button
        className="p-5 rounded-lg text-white text-center bg-blue-400 ml-5"
        onClick={() => setOpenModal(true)}
      >
        Open modal
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="bg-white p-10 rounded-lg w-full max-w-[320px]">
          <TooltipAdvanced title="Tooltip2">This is tooltip 2</TooltipAdvanced>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          vitae, et obcaecati reiciendis, labore cumque dolorum est veritatis
          repellendus dolor repellat, modi maiores porro minima quae ut magnam!
          Obcaecati, eos!
        </div>
      </ModalBase>
      <ModalAdvanced
        visible={openModal}
        onClose={() => setOpenModal(false)}
        bodyClassName="w-full max-w-[400px] bg-white p-10 rounded-lg"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button>
      </ModalAdvanced>
      <div className="inline-block ml-5">
        <TooltipAdvanced title="Tooltip">This is a tooltip</TooltipAdvanced>
      </div>
    </div>
  );
};

export default App;
