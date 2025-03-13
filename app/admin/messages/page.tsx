import { getAllMessages } from "@/lib/db"

export default async function MessagesPage() {
  const messages = await getAllMessages()

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Mensagens Recebidas</h1>

        <div className="space-y-4">
          {messages.map((message: any) => (
            <div key={message.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="font-bold text-emerald-400">{message.name}</h2>
                  <p className="text-sm text-zinc-400">{message.email}</p>
                </div>
                <span className="text-sm text-zinc-500">{new Date(message.created_at).toLocaleString()}</span>
              </div>
              <p className="text-zinc-300">{message.message}</p>
            </div>
          ))}

          {messages.length === 0 && <p className="text-center text-zinc-500">Nenhuma mensagem recebida ainda.</p>}
        </div>
      </div>
    </div>
  )
}

