import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import "../styles/gradient.css";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-20 text-center sm:mt-20">
        <div className="background-gradient">


        </div>
        <svg
          className="bokeh"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="10%" cy="85%" rx="75%" ry="40%" />
          <ellipse cx="45%" cy="50%" rx="15%" ry="8%" />
          <ellipse cx="85%" cy="35%" rx="30%" ry="20%" />
          <ellipse cx="60%" cy="85%" rx="20%" ry="10%" />
          <ellipse cx="45%" cy="50%" rx="30%" ry="15%" />
          <ellipse cx="35%" cy="25%" rx="20%" ry="10%" />
          <ellipse cx="90%" cy="-25%" rx="35%" ry="20%" />
          <ellipse cx="-15%" cy="30%" rx="30%" ry="15%" />
          <ellipse cx="65%" cy="85%" rx="55%" ry="30%" />
          <ellipse cx="45%" cy="50%" rx="20%" ry="10%" />
        </svg>
        <h1 className="max-w-4xl mx-auto text-gray-300 normal text-8xl font-Domine sm:text-7xl">
         Envisioning Beautiful Dream Rooms With AI <br/> 
        </h1>
        <h2 className="max-w-xl mx-auto mt-12 text-lg leading-7 text-gray-500 sm:text-gray-400">
          Take a picture of your room and see how your room looks in different
          themes. 100% free – remodel your room today.
        </h2>
        <Link
          rel="noopener noreferrer"
          className="px-4 py-3 mt-8 leading-7 button_secondary p-l book box-shadow push-buttons "
          href="/dream"
        >
          {" "}
          Generate your dream room
          <svg
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="14.5" stroke="#F6F6F4"></circle>
            <path d="m12 8.2 7 6.3-7 6.3" stroke="#F6F6F4"></path>
          </svg>{" "}
        </Link>
        <div className="flex flex-col items-center justify-between w-full mt-6 sm:mt-10">
          <div className="flex flex-col mt-4 mb-16 space-y-10">
            <div className="flex flex-col sm:space-x-8 sm:flex-row">
              <div>
                <h3 className="mb-1 text-lg font-medium">Original Room</h3>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/room-one.jpg"
                  className="object-cover w-full h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="mt-8 sm:mt-0">
                <h3 className="mb-1 text-lg font-medium">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/room-one-rep.png"
                  className="object-cover w-full mt-2 h-96 rounded-2xl sm:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
