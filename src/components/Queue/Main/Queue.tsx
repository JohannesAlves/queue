import { useState } from "react";
import thelephone from "../../../assets/whatsapp.svg";
import befrontLogo from "../../../assets/Logo BF2.png";

import { Link } from "react-router-dom";

export default function Queue() {
  const [active, setActive] = useState("home");

  return (
    <div className="bg-zinc-900 min-h-screen">
      <nav className="text-slate-200">
        <div className="flex flex-wrap gap-10 sm:text-2xl p-12 justify-center lg:justify-start">
          <a
            className={`hover:text-white hover:underline decoration-yellow-300 underline-offset-8 ${active}`}
            href="#"
            onClick={() => setActive("home")}
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => setActive("services")}
            className={`hover:text-white hover:underline decoration-yellow-300 underline-offset-8 ${active}`}
          >
            Services
          </a>
          <a
            href="#"
            onClick={() => setActive("aboutus")}
            className={`hover:text-white hover:underline decoration-yellow-300 underline-offset-8 ${active}`}
          >
            About Us
          </a>
          <a
            href="#"
            onClick={() => setActive("contact")}
            className={`hover:text-white hover:underline decoration-yellow-300 underline-offset-8 ${active}`}
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="text-slate-200 flex lg:flex-row flex-col justify-center items-center mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <img src={befrontLogo} className="sm:w-60 w-32" />
            <h1 className="sm:text-8xl text-4xl font-bold text-center mt-10">
              Fila Digital
            </h1>
          </div>

          <div className="flex flex-col mt-6 sm:text-4xl text-sm gap-2 p-2 items-center text-zinc-900 font-bold">
            <Link
              to="form"
              state={{ broker: "Kaio" }}
              className="lg:w-[30rem] w-full"
            >
              <button className="bg-yellow-400 hover:bg-black transition-all ease-in hover:text-white rounded-2xl w-full p-3">
                Broker Kaio
              </button>
            </Link>

            <Link
              to="form"
              state={{ broker: "Luis" }}
              className="lg:w-[30rem] w-full"
            >
              <button className="bg-yellow-400 hover:bg-black transition-all ease-in hover:text-white rounded-2xl  w-full p-3">
                Broker Luís
              </button>
            </Link>

            <Link
              to="form"
              state={{ broker: "Will" }}
              className="lg:w-[30rem] w-full"
            >
              <button className="bg-yellow-400 hover:bg-black transition-all ease-in hover:text-white rounded-2xl  w-full p-3">
                Broker Will
              </button>
            </Link>
          </div>

          <div className="flex justify-center mt-10">
            <a href="https://wa.me/message/6AERHCUPAYSIG1">
              <img className="sm:w-16 w-10" src={thelephone} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
