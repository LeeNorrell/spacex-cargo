"use client";
import Form from "./components/form";

// import DropOff from "./list1";
// import Destination from "./list2";
// import {create} from "/api/cargo"

const CargoForm = () => {
  return (
    <>
      <div className="mx-auto inset-x-0 top-12 h-16 ... text-center">
        <h2 className="text-4xl font-bold inline-block tracking-tight text-white sm:text-6xl">
          SpaceX Cargo
        </h2>
      </div>
      <div className="border-8 border-white h-screen">
        {/* {errored && <div>Error in Creating Cargo</div>} */}
        {/* {confirmed ? <div>Confirmed Cargo!!!</div> : <Form />} */}
        <Form />
      </div>
    </>
  );
};
export default CargoForm;
