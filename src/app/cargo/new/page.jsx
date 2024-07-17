'use client'
import { useState } from 'react';

// import DropOff from "./list1";
// import Destination from "./list2";
// import {create} from "/api/cargo"

const CargoForm = () => {
  const [weight, setWeight] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [errored, setErrored] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('createCargo', e.target.weight.value)
    const response = await fetch('/api/cargo', {
      method: 'POST',
      body: JSON.stringify({ weight }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // TODO inspect value of response for valid
      setConfirmed(true);
    } else {
      setConfirmed(false);
      setErrored(true);
    }
  }

  return (
    <>
      <div className="mx-auto inset-x-0 top-12 h-16 ... text-center">
        <h2 className="text-4xl font-bold inline-block tracking-tight text-white sm:text-6xl">
          SpaceX Cargo
        </h2>
      </div>
      <div className="border-8 border-white h-screen">
      {errored && <div>Error in Creating Cargo</div>}
      {confirmed 
        ? <div>Confirmed Cargo!!!</div>
        :
        <form onSubmit={handleSubmit}>
          <input 
            type="number"
            name="weight" 
            value={weight}
            onChange={e=> setWeight(e.target.value)}
            className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button className="text-white" type="submit" >
            Submit
          </button>
        </form>
      }
      </div>
    </>
  );
};
export default CargoForm;
