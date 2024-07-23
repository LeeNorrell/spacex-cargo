'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';


const Cargo = () => {
    const [cargoItems, setCargoItems] = useState([]); 

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/api/cargo');
        let data;
        try {
          data = await response.json();
        } catch (error) {
          console.error('Error parsing JSON:', error);
          data = [];
        }
        console.log(data);
        setCargoItems(data);
      };
    
      fetchData();
    }, []);

    return (
        <div >
        <div className="mx-auto absolute inset-x-0 top-12 h-16 ... text-center">
          <h2 className="text-4xl font-bold inline-block tracking-tight text-white sm:text-6xl">SpaceX Cargo</h2>
        </div>
        <div className="absolute left-60 top-32 h-16 ...">
          <Link href="/cargo/new">
        <button
        type="button"
        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
        Create Cargo
      </button>
        </Link >
        </div>
        <div className="absolute right-60 top-32 h-16 ...">
          <Link href="/cargoManifest">
        <button
        type="button"
        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
        View Cargo
      </button>
        </Link>
        </div>
        <div className="absolute inset-x-6 top-60  h-16 ...">
        <h3 className="text-base font-semibold leading-6 text-xl text-white">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {cargoItems.length > 0 && cargoItems.map((item) => (
          <div key={item.id}>
            <span>{item.id}</span>
            <span>{item.weight}</span>
          </div>
        ))}
      </dl>
        </div>
        
      </div>
)};

export default Cargo;
