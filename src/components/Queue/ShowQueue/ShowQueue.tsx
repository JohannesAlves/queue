import thelephone from "../../../assets/whatsapp.svg";
import { Link, useParams } from "react-router-dom";
import { getUserByIdQueue } from "../../../services/Queue/Queue";
import { useEffect, useState } from "react";

export default function ShowQueue() {
  const { id } = useParams();
  const [user, setUser] = useState<any>();

  const getUserData = async () => {
    const userData = id && (await getUserByIdQueue(id));
    setUser(userData);
  };

  const linkToCopy = `https://${window.location.hostname}/queue/showqueue/${user?.id}`;

  const copy = async () => {
    await navigator.clipboard.writeText(linkToCopy);
    alert("Texto copiado com sucesso");
  };

  useEffect(() => {
    getUserData();
  }, [id]);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <nav className="text-slate-200 ">
        <div className="flex flex-wrap gap-10 lg:text-2xl p-12 justify-center lg:justify-start">
          <Link className={`hover:text-white hover:underline decoration-yellow-300 underline-offset-8 `} to="/queue">
            Broker {user?.broker}
          </Link>
        </div>
      </nav>

      <main className="text-slate-200 p-12 font-light">
        <div className="flex flex-col ">
          <div className="lg:text-4xl">
            <p>Olá, {user?.name}!</p>
            <strong className="">Você está na fila, aguarde a sua vez.</strong>
            <p>Sua posição na fila é:</p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center justify-center">
          <strong className="lg:text-[13rem] text-[5rem] text-yellow-400 font-bold">{user?.positionInQueue}°</strong>
          <strong className="text-center">O link para você acessar novamente a fila em que você está é: </strong>
          <button className="text-yellow-400 font-bold break-all" onClick={copy}>
            {linkToCopy}
          </button>
          <strong className="mt-10">Clique para copiar!</strong>
        </div>

        <div className="flex justify-center mt-10">
          <a href="https://wa.me/message/6AERHCUPAYSIG1">
            <img className="sm:w-16 w-10" src={thelephone} />
          </a>
        </div>
      </main>
    </div>
  );
}
