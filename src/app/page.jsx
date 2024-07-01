import "./globals.css";
import Image from "next/image";
import background from "../../public/images/spaceX-1.jpg"

export default function Home() {
  return (
    <>
      <div>
        <Image
        alt="rocket launching"
        src={background}
        sizes="100vw"
        style={{
          width: '100%'
        }}
        />
          <div className="mx-auto absolute inset-x-0 top-12 h-16 ... text-center">
            <h2 className="text-4xl font-bold inline-block tracking-tight text-white sm:text-6xl">
              SpaceX Cargo Application
            </h2>
          </div>
      </div>
    </>
  );
}
