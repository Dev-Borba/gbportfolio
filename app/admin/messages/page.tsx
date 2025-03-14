"use client"

import { useState, useEffect } from "react"
import { getAllMessages, markMessageAsRead, deleteMessage } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Trash2, Mail, MailOpen } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface Message {
  id: number
  name: string
  email: string
  message: string
  created_at: string
  read: boolean
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const { toast } = useToast()

  // Carregar mensagens ao montar o componente
  useEffect(() => {
    fetchMessages()
  }, [])

  async function fetchMessages() {
    try {
      const response = await fetch("/api/messages")
      const data = await response.json()
      if (data.success) {
        setMessages(data.messages)
      }
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error)
    }
  }

  async function handleMarkAsRead(id: number) {
    try {
      const response = await fetch(`/api/messages/${id}/read`, {
        method: "POST",
      })
      const data = await response.json()
      
      if (data.success) {
        setMessages(messages.map(msg => 
          msg.id === id ? { ...msg, read: true } : msg
        ))
        toast({
          title: "Sucesso",
          description: "Mensagem marcada como lida",
        })
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao marcar mensagem como lida",
        variant: "destructive",
      })
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Tem certeza que deseja excluir esta mensagem?")) return

    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: "DELETE",
      })
      const data = await response.json()
      
      if (data.success) {
        setMessages(messages.filter(msg => msg.id !== id))
        toast({
          title: "Sucesso",
          description: "Mensagem excluída com sucesso",
        })
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao excluir mensagem",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Mensagens Recebidas</h1>
          <Button 
            onClick={fetchMessages}
            variant="outline"
            className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
          >
            Atualizar
          </Button>
        </div>

        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`bg-zinc-900 border rounded-lg p-4 transition-all duration-300
                ${message.read ? 'border-zinc-800' : 'border-emerald-500/50 shadow-lg shadow-emerald-500/10'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-emerald-400">{message.name}</h2>
                    {!message.read && (
                      <span className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">
                        Nova
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-400">{message.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-zinc-500">
                    {new Date(message.created_at).toLocaleString()}
                  </span>
                  {!message.read && (
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleMarkAsRead(message.id)}
                      className="text-emerald-400 hover:text-emerald-300"
                      title="Marcar como lida"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  )}
                  {message.read && (
                    <MailOpen className="h-4 w-4 text-zinc-500" />
                  )}
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleDelete(message.id)}
                    className="text-red-400 hover:text-red-300"
                    title="Excluir mensagem"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-zinc-300 whitespace-pre-wrap">{message.message}</p>
            </div>
          ))}

          {messages.length === 0 && (
            <div className="text-center py-8">
              <p className="text-zinc-500">Nenhuma mensagem recebida ainda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
