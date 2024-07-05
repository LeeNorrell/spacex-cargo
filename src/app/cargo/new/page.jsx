'use client'

import DropOff from "./list1";
import Destination from "./list2";
// import {create} from "/api/cargo"

const CargoForm = () => {
  const handleClick = () => {
    console.log('createCargo')
  }
  return (
    <>
      <div className="mx-auto absolute inset-x-0 top-12 h-16 ... text-center">
        <h2 className="text-4xl font-bold inline-block tracking-tight text-white sm:text-6xl">
          SpaceX Cargo
        </h2>
      </div>
      <div className="border-8 border-white h-screen">
        <div className=" ">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="cargo"
              className="block text-sm font-medium leading-6 text-white"
            >
              Cargo
            </label>
            <div className="mt-2">
              <input
                type="input"
                name="cargo"
                id="cargo"
                className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Name of Cargo"
              />
            </div>
          </div>
          <div>
            <DropOff />
          </div>
          <div>
            <Destination />
          </div>
        </div>
      </div>
      <button
      className="text-white"
      type="button"
      onClick={handleClick}>
        submit
      </button>
    </>
  );
};
export default CargoForm;
