'use client'
 
import { useRouter } from 'next/navigation'

const stats = [
  { name: 'Total Customers', stat: '700' },
  { name: 'Avg. Delivery Rate', stat: '100%' },
  { name: 'Avg. Delivery Time', stat: '4 hrs' },
]

const Cargo = () => {
  const router = useRouter()
    return (
        <div >
        <div className="mx-auto absolute inset-x-0 top-12 h-16 ... text-center">
          <h2 className="text-4xl font-bold inline-block tracking-tight text-white sm:text-6xl">SpaceX Cargo</h2>
        </div>
        <div className="absolute left-60 top-32 h-16 ...">
        <button
        type="button"
        onClick={() => router.push('/cargoForm')}
        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Create Cargo
      </button>
        </div>
        <div className="absolute right-60 top-32 h-16 ...">
        <button
        type="button"
        onClick={() => router.push('/cargoManifest')}
        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        View Cargo
      </button>
        </div>
        <div className="absolute inset-x-6 top-60  h-16 ...">
        <h3 className="text-base font-semibold leading-6 text-xl text-white">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
        </div>
        
      </div>
)};

export default Cargo;
