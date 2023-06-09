import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import InputMask from "react-input-mask";

import { signupQueue } from "../../../services/Queue/Queue";

export default function QueueForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit } = useForm();
  const [active, setActive] = useState("home");

  const broker = location.state?.broker;

  const onSubmit = async (data) => {
    const userData = {
      name: data.name,
      whatsapp: data.whatsapp,
      value: data.value,
      broker: broker,
    };

    try {
      const user = await signupQueue(userData);

      if (!user) {
        return alert("Algo de errado aconteceu!");
      }

      navigate(`/queue/showqueue/${user?.id}`);
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="bg-zinc-900 min-h-screen">
      <nav className="text-slate-200 ">
        <div className="flex flex-wrap gap-10 lg:text-2xl p-12 justify-center lg:justify-start">
          <Link
            className={`hover:text-white hover:underline decoration-yellow-300 underline-offset-8 ${active}`}
            to="/"
            onClick={() => setActive("home")}
          >
            Broker {broker && broker}
          </Link>
        </div>
      </nav>

      <main className="text-slate-200 p-12 font-light flex justify-center lg:justify-start">
        <div className="flex flex-col items-center lg:items-start">
          <div>
            <h1 className="lg:text-4xl text-center">
              Preencha o formulário abaixo para continuar:
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10 flex flex-col justify-center lg:w-96 w-72">
              <div>
                <label className="lg:text-3xl">Nome:</label>
                <br />
                <input
                  className="bg-yellow-400 rounded-md lg:text-3xl text-lg text-black pl-4 w-72 lg:w-[25rem]"
                  {...register("name")}
                />
              </div>

              <div>
                <label className="lg:text-3xl">WhatsApp:</label>
                <br />
                <InputMask
                  mask="(99) 99999-9999"
                  className="bg-yellow-400 rounded-md lg:text-3xl text-lg text-black pl-4 w-72 lg:w-[25rem]"
                  {...register("whatsapp")}
                />
              </div>

              <div>
                <label className="lg:text-3xl">Valor a investir:</label>
                <br />
                <InputMask
                  mask="R$ 999999999"
                  maskChar=""
                  className="bg-yellow-400 rounded-md lg:text-3xl text-lg text-black pl-4 w-72 lg:w-[25rem]"
                  {...register("value")}
                />
              </div>
              <button className="bg-yellow-400 hover:bg-black transition-all ease-in hover:text-white mt-10 rounded-lg lg:w-40 lg:h-12 h-10 text-black lg:text-3xl">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
