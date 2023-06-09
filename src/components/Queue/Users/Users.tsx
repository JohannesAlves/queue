import { deleteUserQueue } from "../../../services/Queue/Queue";
import clipboardIcon from "../../../assets/clipboard.png";

export default function Users({ users }: any) {
  const deleteUser = async (userId: string) => {
    const deletedUser = await deleteUserQueue(userId);
    if (deletedUser) {
      return alert("Usuário excluido com sucesso!");
    }
  };

  const copy = async (linkToCopy: string) => {
    await navigator.clipboard.writeText(linkToCopy);
    alert("Texto copiado com sucesso");
  };

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">User Accounts</h2>
          <span className="text-xs text-gray-500">View accounts of registered users</span>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gold-500 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">Broker</th>
                <th className="px-5 py-3">Nome</th>
                <th className="px-5 py-3">WhatsApp</th>
                <th className="px-5 py-3">Valor a Investir</th>
                <th className="px-5 py-3">Fila</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {users &&
                users?.map(user => (
                  <tr key={user?.id}>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{user?.broker}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="whitespace-no-wrap">{user?.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{user?.whatsapp}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{user?.value}</p>
                    </td>

                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{user?.positionInQueue}</p>
                    </td>

                    <td className="flex  gap-2 border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <button className="bg-red-600 p-3 rounded-lg text-white" onClick={() => deleteUser(user?.id)}>
                        Excluir
                      </button>

                      <button
                        className="bg-blue-500 p-3 rounded-lg text-white"
                        onClick={() => copy(`https://${window.location.hostname}/queue/showqueue/${user?.id}`)}
                      >
                        <img className="w-4" src={clipboardIcon} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
